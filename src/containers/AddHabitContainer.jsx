import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { AddHabit } from '../components/AddHabit';
import { dialogAddHabitCloseAction } from '../services/dialogs/actions';
import { NewHabitsScheme } from '../utils/schemaValidators';

class AddHabitContainer extends PureComponent {
  formSubmit = (values, { resetForm }) => {
    const { closeDialog } = this.props;
    resetForm();
    closeDialog();
  };

  render() {
    const { isOpen, closeDialog } = this.props;
    const formInitValues = {
      habitName: '',
      habitDescr: '',
      habitType: '',
      habitCondition: '',
      habitHours: '',
      habittypeHours: '',
      habitRepeat: '',
      habitDays: [false, false, false, false, false, false, false]
    };
    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={NewHabitsScheme}
        onSubmit={this.formSubmit}
        render={props => (
          <AddHabit {...props} isOpen={isOpen} closeDialog={closeDialog} />
        )
        }
      />
    );
  }
}

AddHabitContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  isOpen: PropTypes.bool.isRequired,
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
  isOpen: state.dialogs.isOpenAddHabitDialog
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(dialogAddHabitCloseAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHabitContainer);
