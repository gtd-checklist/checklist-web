import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SubMenu } from '../components/SubMenu';
import { dialogAddHabitOpenAction, dialogReviewHabitOpenAction } from '../services/dialogs/actions';
import { fetchHabitsReviewAction } from '../services/review/actions';

class SubMenuContainer extends PureComponent {
  onClickReview = () => {
    const { fetchHabitsReview, dialogReviewHabitOpen } = this.props;
    fetchHabitsReview();
    dialogReviewHabitOpen();
  }

  render() {
    const { openAddHabitDialog, waiting } = this.props;
    return (
      <SubMenu
        openAddHabitDialog={openAddHabitDialog}
        onClickReview={this.onClickReview}
        waiting={waiting}
      />
    );
  }
}

SubMenuContainer.propTypes = {
  openAddHabitDialog: PropTypes.func,
  dialogReviewHabitOpen: PropTypes.func,
  fetchHabitsReview: PropTypes.func,
  waiting: PropTypes.bool.isRequired
};

SubMenuContainer.defaultProps = {
  openAddHabitDialog: () => false,
  dialogReviewHabitOpen: () => false,
  fetchHabitsReview: () => false
};

const mapStateToProps = state => ({
  waiting: state.review.waiting
});

const mapDispatchToProps = dispatch => ({
  openAddHabitDialog: () => dispatch(dialogAddHabitOpenAction()),
  dialogReviewHabitOpen: () => dispatch(dialogReviewHabitOpenAction()),
  fetchHabitsReview: () => dispatch(fetchHabitsReviewAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMenuContainer);
