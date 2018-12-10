import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SubMenu } from '../components/SubMenu';
import { dialogAddHabitOpenAction, dialogReviewHabitOpenAction } from '../services/dialogs/actions';
import { showReviewListHabitsAction } from '../services/review/actions';

class SubMenuContainer extends PureComponent {
  onClickReview = () => {
    const { showReviewListHabits, openReviewHabitDialog } = this.props;
    showReviewListHabits();
    openReviewHabitDialog();
  }

  render() {
    const { openAddHabitDialog } = this.props;
    return (
      <SubMenu
        openAddHabitDialog={openAddHabitDialog}
        onClickReview={this.onClickReview}
      />
    );
  }
}

SubMenuContainer.propTypes = {
  openAddHabitDialog: PropTypes.func,
  openReviewHabitDialog: PropTypes.func,
  showReviewListHabits: PropTypes.func
};

SubMenuContainer.defaultProps = {
  openAddHabitDialog: () => false,
  openReviewHabitDialog: () => false,
  showReviewListHabits: () => false
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openAddHabitDialog: () => dispatch(dialogAddHabitOpenAction()),
  openReviewHabitDialog: () => dispatch(dialogReviewHabitOpenAction()),
  showReviewListHabits: () => dispatch(showReviewListHabitsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMenuContainer);
