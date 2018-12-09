import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { habitsListMonth } from '../data';
import { ListHabits } from '../components/ListHabits';
import { getDataWeek, getWeekNumber } from '../utils/getData';

class ListHabitsContainer extends PureComponent {
  getHabitsWeek = firstDay => getDataWeek(firstDay);

  getHabitsWeekNumber = firstDay => getWeekNumber(firstDay);

  createPlannedDate = planned => (
    planned.map(itemPlanned => (new Date(itemPlanned).getDate()))
  );

  createResolvedDate = resolved => (
    resolved.map(itemResolved => (new Date(itemResolved).getDate()))
  );

  render() {
    const { weeks } = habitsListMonth;
    return (
      <ListHabits
        weeks={weeks}
        getHabitsWeek={this.getHabitsWeek}
        getHabitsWeekNumber={this.getHabitsWeekNumber}
        createPlannedDate={this.createPlannedDate}
        createResolvedDate={this.createResolvedDate}
      />);
  }
}

ListHabitsContainer.propTypes = {

};

ListHabitsContainer.defaultProps = {

};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHabitsContainer);
