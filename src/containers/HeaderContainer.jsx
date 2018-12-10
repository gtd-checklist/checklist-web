import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header';
import { getMonth, getYear } from '../utils/getData';

class HeaderContainer extends PureComponent {
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
    return <Header month={month} year={year} />;
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
