import React, { PureComponent } from 'react';

import { HorizontalCalend } from '../components/HorizontalCalend';

import { getWeekDate, getCurrentDayNumber } from '../utils/getData';

class HorizontalCalendContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 0,
      selectedIndex: 0,
      week: []
    };
  }

  componentDidMount() {
    const data = getWeekDate();
    const current = getCurrentDayNumber();
    this.setState({
      selectedIndex: current,
      currentDay: current,
      week: data
    });
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    const { selectedIndex, week, currentDay } = this.state;
    return (
      <HorizontalCalend
        currentDay={currentDay}
        week={week}
        selectedIndex={selectedIndex}
        handleListItemClick={this.handleListItemClick}
      />
    );
  }
}

export default HorizontalCalendContainer;
