import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { menuData } from '../data';
import { Menu } from '../components/Menu';


class MenuContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <Menu menuData={menuData} open={open} toggleDrawer={this.toggleDrawer} />
    );
  }
}

MenuContainer.propTypes = {
  // habits: PropTypes.instanceOf(Object)
};

MenuContainer.defaultProps = {
  // habits: {}
};

export { MenuContainer };
