import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Habits } from '../components/Habits';
import { dialogAddHabitOpenAction } from '../services/dialogs/actions';
import { fetchHabitsAction } from '../services/habits/actions';

class HabitsContainer extends PureComponent {
  componentDidMount() {
    const { fetchHabits } = this.props;
    fetchHabits();
  }

  render() {
    const { habits, openDialog } = this.props;

    console.log(habits);

    return <Habits habits={habits} openDialog={openDialog} />;
  }
}

HabitsContainer.propTypes = {
  habits: PropTypes.arrayOf(Object),
  openDialog: PropTypes.func,
  fetchHabits: PropTypes.func.isRequired
};

HabitsContainer.defaultProps = {
  openDialog: () => false,
  habits: []
};

const mapStateToProps = state => ({
  habits: state.habits.habits
});

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(dialogAddHabitOpenAction()),
  fetchHabits: () => dispatch(fetchHabitsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsContainer);
