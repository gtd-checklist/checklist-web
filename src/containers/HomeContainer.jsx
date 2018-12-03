import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Home } from '../components/Home';
import { getMonth, getYear } from '../utils/getData';
import { ROUTE_PATHS } from '../routes';
import { dialogAddHabitOpenAction, dialogReviewHabitOpenAction } from '../services/dialogs/actions';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      year: ''
    };
  }

  componentDidMount() {
    const { location, openAddHabitDialog, openReviewHabitDialog } = this.props;
    if (location.pathname === ROUTE_PATHS.newHabit) {
      openAddHabitDialog();
    }
    if (location.pathname === ROUTE_PATHS.review) {
      openReviewHabitDialog();
    }
    this.setState({
      month: getMonth(),
      year: getYear()
    });
  }

  render() {
    const { month, year } = this.state;
    return <Home month={month} year={year} />;
  }
}

HomeContainer.propTypes = {
  openAddHabitDialog: PropTypes.func,
  openReviewHabitDialog: PropTypes.func,
  location: PropTypes.instanceOf(Object)
};

HomeContainer.defaultProps = {
  openAddHabitDialog: () => false,
  openReviewHabitDialog: () => false,
  location: {}
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openAddHabitDialog: () => dispatch(dialogAddHabitOpenAction()),
  openReviewHabitDialog: () => dispatch(dialogReviewHabitOpenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
