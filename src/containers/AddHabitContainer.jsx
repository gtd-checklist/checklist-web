import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { AddHabit } from '../components/AddHabit';
import { dialogCloseAction } from '../services/dialogs/actions';
import { addNewHabitAction } from '../services/habits/actions';
import { NewHabitsScheme } from '../utils/schemaValidators';

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

class AddHabitContainer extends PureComponent {
  static formInitValues = {
    habitName: '',
    habitDescr: '',
    habitType: '',
    habitCondition: '',
    habitHours: '',
    habitTypeHours: '',
    habitRepeat: '',
    habitDays: [false, false, false, false, false, false, false]
  };

  formSubmit = (values) => {
    const { addNewHabit, closeDialog } = this.props;

    const habit = {
      name: values.habitName,
      description: values.habitDescr,
      isNumerical: values.habitType === 'number',
      repeat: values.habitDays.reduce((acc, day, i) => (day ? acc.concat([days[i]]) : acc), [])
    };

    addNewHabit(habit);
    closeDialog();
  };

  render() {
    return (
      <Formik
        initialValues={AddHabitContainer.formInitValues}
        validationSchema={NewHabitsScheme}
        onSubmit={this.formSubmit}
        render={props => <AddHabit {...this.props} {...props} />}
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
