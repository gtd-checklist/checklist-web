import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SubMenu } from '../components/SubMenu';
import { dialogAddHabitOpenAction, dialogReviewHabitOpenAction } from '../services/dialogs/actions';

class SubMenuContainer extends PureComponent {
  render() {
    const { openAddHabitDialog, openReviewHabitDialog } = this.props;
    return (
      <SubMenu
        openAddHabitDialog={openAddHabitDialog}
        openReviewHabitDialog={openReviewHabitDialog}
      />
    );
  }
}

SubMenuContainer.propTypes = {
  openAddHabitDialog: PropTypes.func,
  openReviewHabitDialog: PropTypes.func
};

SubMenuContainer.defaultProps = {
  openAddHabitDialog: () => false,
  openReviewHabitDialog: () => false
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openAddHabitDialog: () => dispatch(dialogAddHabitOpenAction()),
  openReviewHabitDialog: () => dispatch(dialogReviewHabitOpenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMenuContainer);
