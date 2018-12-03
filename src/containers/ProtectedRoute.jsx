/* eslint-disable */

import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ROUTE_PATHS } from '../routes';

const authLinks = [ROUTE_PATHS.auth, ROUTE_PATHS.registration];
class ProtectedRoute extends PureComponent {
  render() {
    const { authenticated, responseStatus, location } = this.props;

    // const isAuthLink = authLinks.includes(location.pathname);
    //
    // if ((!authenticated && !isAuthLink) || responseStatus === 401) {
    //   return <Redirect to={{ pathname: ROUTE_PATHS.auth, state: { from: location } }} />;
    // }
    //
    // if (authenticated && isAuthLink) {
    //   return <Redirect to={{ pathname: ROUTE_PATHS.root, state: { from: location } }} />;
    // }

    console.log('route props', this.props);

    return <Route {...this.props} history={this.props.history} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  authenticated: state.auth.authenticated,
  responseStatus: state.responseStatus.responseStatus
});

export default connect(mapStateToProps)(ProtectedRoute);
