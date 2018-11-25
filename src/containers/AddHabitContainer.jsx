import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { AddHabit } from '../components/AddHabit';

import { NewHabitsScheme } from '../utils/schemaValidators';

class AddHabitContainer extends PureComponent {
  formSubmit = (values, { resetForm }) => {
    resetForm();
  };

  render() {
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
          <AddHabit {...props} />
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

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHabitContainer);
