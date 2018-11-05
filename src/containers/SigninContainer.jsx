import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { signInAction } from '../services/auth/actions';

class SigninContainer extends PureComponent {
  submit = (values) => {
    const { signInAction, history } = this.props;
    signInAction(values, history);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <h1>Writing from SigninContainer</h1>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, { signInAction })(SigninContainer);
