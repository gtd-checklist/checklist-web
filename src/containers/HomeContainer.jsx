import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Home } from '../components/Home';

import { getMonth, getYear } from '../utils/getData';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      year: ''
    };
  }

  componentDidMount() {
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

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
