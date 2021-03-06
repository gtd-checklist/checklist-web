import React, { PureComponent } from 'react';

import { routes } from '../routes';
import { Menu } from '../components/Menu';

class MenuContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenned: false
    };
  }

  toggleDrawer = () => {
    const { isOpenned } = this.state;
    this.setState({
      isOpenned: !isOpenned
    });
  };

  render() {
    const { isOpenned } = this.state;
    return <Menu routes={routes} isOpenned={isOpenned} toggleDrawer={this.toggleDrawer} />;
  }
}

export { MenuContainer };
