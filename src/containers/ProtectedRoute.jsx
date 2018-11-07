import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends PureComponent {
  render() {
    const { authenticated, location } = this.props;
    if (!authenticated && location.pathname !== '/signin' && location.pathname !== '/registration') {
      return <Redirect to={{ pathname: '/signin', state: { from: location } }} />;
    }

    if (authenticated && (location.pathname === '/signin' || location.pathname === '/registration')) {
      return <Redirect to={{ pathname: '/', state: { from: location } }} />;
    }

    return <Route {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    authenticated: state.authenticated
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
