import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from '../../globalStyled';
import { StyledHeader } from './styled';

import back from '../../img/back-mountain2.jpg';

const Header = (props) => {
  const { month, year } = props;
  return (
    <StyledHeader container back={back} color="secondary">
      <StyledTitle component="h1" variant="h1" align="center" color="inherit" year={year}>
        {month}
      </StyledTitle>
    </StyledHeader>
  );
};

Header.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string
};

Header.defaultProps = {
  month: '',
  year: ''
};

export { Header };
