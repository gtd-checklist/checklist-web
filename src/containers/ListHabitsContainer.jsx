import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListHabits } from '../components/ListHabits';
import { getWeekDate, getWeekNumber, getMonth } from '../utils/getData';
import { showListHabitsAction } from '../services/list/actions';

class ListHabitsContainer extends PureComponent {
  componentDidMount() {
    const { showListHabits } = this.props;
    const month = getMonth('number');
    showListHabits(month);
  }

  getHabitsWeek = firstDay => getWeekDate(firstDay);

  getHabitsWeekNumber = firstDay => getWeekNumber(firstDay);

  createPlannedDate = planned => (
    planned.map(itemPlanned => (new Date(itemPlanned).getDate()))
  );

  createResolvedDate = resolved => (
    resolved.map(itemResolved => (new Date(itemResolved).getDate()))
  );

  render() {
    const { list } = this.props;
    const { weeks } = list;
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
  list: PropTypes.instanceOf(Object),
  showListHabits: PropTypes.func
};

ListHabitsContainer.defaultProps = {
  list: {},
  showListHabits: () => false
};

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  showListHabits: month => dispatch(showListHabitsAction(month))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHabitsContainer);
