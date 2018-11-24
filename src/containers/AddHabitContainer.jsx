import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { AddHabit } from '../components/AddHabit';

import { RegistrationSchema } from '../utils/schemeValidators';

class AddHabitContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false
    };
  }

  handleFormat = name => (event) => {
    this.setState({ [name]: event.target.checked });
  }

  formSubmit = (values, { resetForm }) => {
    resetForm();
  };

  render() {
    const formInitValues = {
      habitName: '',
      habitDescr: '',
      habitType: '',
      habitCondition: '',
      habitHours: 0,
      habittypeHours: '',
      habitRepeat: ''
    };
    const { checkedA } = this.state;
    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={RegistrationSchema}
        onSubmit={this.formSubmit}
        render={props => (
          <AddHabit {...props} checkedA={checkedA} handleFormat={this.handleFormat} />
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
  handleSubmit: PropTypes.func
};

AddHabitContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

export { AddHabitContainer };
