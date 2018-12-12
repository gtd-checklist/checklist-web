import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';

import { Authorization } from '../components/Authorization';

import { AuthorizationSchema } from '../utils/schemaValidators';
import { signInAction } from '../services/auth/actions';
import { ROUTE_PATHS } from '../routes';

class AuthorizationContainer extends Component {
  formSubmit = (values, { setStatus }) => {
    const { signIn } = this.props;

    setStatus({ errorMessage: '' });
    signIn(values.userEmail, values.userPass);
  };

  render() {
    const formInitValues = {
      userEmail: '',
      userPass: ''
    };

    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to={ROUTE_PATHS.root} />;
    }

    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={AuthorizationSchema}
        onSubmit={this.formSubmit}
        render={props => <Authorization {...props} />}
      />
    );
  }
}

AuthorizationContainer.propTypes = {
  status: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  signIn: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
};

AuthorizationContainer.defaultProps = {
  status: {},
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, pass) => dispatch(signInAction(email, pass))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationContainer);
