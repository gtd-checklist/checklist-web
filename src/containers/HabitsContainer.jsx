import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { habitsData } from '../data';
import { Habits } from '../components/Habits';
import { dialogAddHabitOpenAction } from '../services/dialogs/actions';

class HabitsContainer extends PureComponent {
  getHabitsItem = () => {};

  render() {
    const { habits } = habitsData;
    const { openDialog } = this.props;
    return <Habits habits={habits} openDialog={openDialog} />;
  }
}

HabitsContainer.propTypes = {
  openDialog: PropTypes.func
};

HabitsContainer.defaultProps = {
  openDialog: () => false
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(dialogAddHabitOpenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsContainer);
