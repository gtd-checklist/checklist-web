import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SubMenu } from '../components/SubMenu';
import { dialogOpenAction } from '../services/dialogs/actions';

class SubMenuContainer extends PureComponent {
  render() {
    const { openDialog } = this.props;
    return (
      <SubMenu openDialog={openDialog} />
    );
  }
}

SubMenuContainer.propTypes = {
  openDialog: PropTypes.func
};

SubMenuContainer.defaultProps = {
  openDialog: () => false
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(dialogOpenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMenuContainer);
