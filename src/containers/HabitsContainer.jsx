import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { habitsData } from '../data';
import { Habits } from '../components/Habits';

class HabitsContainer extends PureComponent {
  getHabitsItem = () => {};

  render() {
    const { habits } = habitsData;
    return <Habits habits={habits} />;
  }
}

HabitsContainer.propTypes = {
};

HabitsContainer.defaultProps = {
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsContainer);
