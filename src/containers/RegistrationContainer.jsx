import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { Registration } from '../components/Registration';

import { RegistrationSchema } from '../utils/schemaValidators';
import { registerAction } from '../services/auth/actions';

class RegistrationContainer extends PureComponent {
  formSubmit = (values) => {
    const { register } = this.props;
    register(values.userName, values.userEmail, values.userPass);
  };

  render() {
    const formInitValues = {
      userName: '',
      userEmail: '',
      userPass: ''
    };

    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={RegistrationSchema}
        onSubmit={this.formSubmit}
        render={props => <Registration {...props} />}
      />
    );
  }
}

RegistrationContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  register: PropTypes.func.isRequired
};

RegistrationContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

const mapDispatchToProps = dispatch => ({
  register: (email, pass, repeatPass) => dispatch(registerAction(email, pass, repeatPass))
});

export default connect(
  null,
  mapDispatchToProps
)(RegistrationContainer);
