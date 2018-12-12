import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Habits } from '../components/Habits';
import { Loader } from '../ui/Loader';
import { dialogAddHabitOpenAction } from '../services/dialogs/actions';
import { fetchHabitsAction } from '../services/habits/actions';

class HabitsContainer extends PureComponent {
  componentDidMount() {
    const { fetchHabits } = this.props;
    fetchHabits();
  }

  render() {
    const { habits, openDialog, waiting } = this.props;

    if (waiting) {
      return <Loader />;
    }
    return <Habits habits={habits} openDialog={openDialog} />;
  }
}

HabitsContainer.propTypes = {
  habits: PropTypes.arrayOf(Object),
  openDialog: PropTypes.func,
  fetchHabits: PropTypes.func.isRequired,
  waiting: PropTypes.bool.isRequired
};

HabitsContainer.defaultProps = {
  openDialog: () => false,
  habits: []
};

const mapStateToProps = state => ({
  habits: state.habits.habits,
  waiting: state.habits.waiting
});

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(dialogAddHabitOpenAction()),
  fetchHabits: () => dispatch(fetchHabitsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsContainer);
