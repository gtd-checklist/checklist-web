import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    const { isOpen } = this.props;
    console.log(`homCont ${isOpen}`);
    return <Home month={month} year={year} isOpen={isOpen} />;
  }
}

HomeContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

HomeContainer.defaultProps = {
  // isOpen: false
};

const mapStateToProps = state => ({
  isOpen: state.openState
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
