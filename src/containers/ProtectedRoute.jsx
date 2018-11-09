import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends PureComponent {
  render() {
    const { authenticated, responseStatus, location } = this.props;
    if ((!authenticated && location.pathname !== '/auth' && location.pathname !== '/registration') || responseStatus === 401) {
      return <Redirect to={{ pathname: '/auth', state: { from: location } }} />;
    }

    if (authenticated && (location.pathname === '/auth' || location.pathname === '/registration')) {
      return <Redirect to={{ pathname: '/', state: { from: location } }} />;
    }

    return <Route {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    authenticated: state.authenticated,
    responseStatus: state.responseStatus
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
