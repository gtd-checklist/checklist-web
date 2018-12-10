import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Journal } from '../components/Journal';
import { getWeekDate, getWeekNumber, getMonth } from '../utils/getData';
import { fetchJournalAction } from '../services/journal/actions';

class JournalContainer extends PureComponent {
  componentDidMount() {
    const { fetchJournal } = this.props;
    const month = getMonth('number');
    fetchJournal(month);
  }

  getHabitsWeek = firstDay => getWeekDate(firstDay);

  getHabitsWeekNumber = firstDay => getWeekNumber(firstDay);

  createPlannedDate = planned => planned.map(itemPlanned => new Date(itemPlanned).getDate());

  createResolvedDate = resolved => resolved.map(itemResolved => new Date(itemResolved).getDate());

  render() {
    const { journal } = this.props;
    const { weeks } = journal;
    return (
      <Journal
        weeks={weeks}
        getHabitsWeek={this.getHabitsWeek}
        getHabitsWeekNumber={this.getHabitsWeekNumber}
        createPlannedDate={this.createPlannedDate}
        createResolvedDate={this.createResolvedDate}
      />
    );
  }
}

JournalContainer.propTypes = {
  journal: PropTypes.instanceOf(Object),
  fetchJournal: PropTypes.func
};

JournalContainer.defaultProps = {
  journal: {},
  fetchJournal: () => {}
};

const mapStateToProps = state => ({
  journal: state.journal.journal
});

const mapDispatchToProps = dispatch => ({
  fetchJournal: month => dispatch(fetchJournalAction(month))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalContainer);
