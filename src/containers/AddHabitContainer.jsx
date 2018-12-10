import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { AddHabit } from '../components/AddHabit';
import { dialogCloseAction, addNewHabitAction } from '../services/dialogs/actions';
import { NewHabitsScheme } from '../utils/schemaValidators';

class AddHabitContainer extends PureComponent {
  static formInitValues = {
    habitName: '',
    habitDescr: '',
    habitType: '',
    habitCondition: '',
    habitHours: '',
    habittypeHours: '',
    habitRepeat: '',
    habitDays: [false, false, false, false, false, false, false]
  };

  formSubmit = (values) => {
    const { addNewHabit, closeDialog } = this.props;
    addNewHabit(values);
    closeDialog();
  };

  render() {
    return (
      <Formik
        initialValues={AddHabitContainer.formInitValues}
        validationSchema={NewHabitsScheme}
        onSubmit={this.formSubmit}
        render={props => <AddHabit {...props} {...this.props} />}
      />
    );
  }
}

AddHabitContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  openDialog: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  setFieldValue: PropTypes.func
};

AddHabitContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false,
  setFieldValue: () => false
};

const mapStateToProps = state => ({
  openDialog: state.dialogs.openDialog
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(dialogCloseAction()),
  addNewHabit: values => dispatch(addNewHabitAction(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHabitContainer);
