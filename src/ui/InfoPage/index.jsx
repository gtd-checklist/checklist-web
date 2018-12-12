import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { Logo } from '../Logo';

import { StyledParagraph, StyledGoHome, StyledFullHeight } from './styled';
import { BgImageTransparent, StyledContent, StyledTitle } from '../../globalStyled';

const InfoPage = (props) => {
  const { backImg, bgColor, headerText, mainText } = props;

  return (
    <BgImageTransparent container justify="center" back={backImg} color={bgColor}>
      <Grid item md={6} xs={12}>
        <StyledFullHeight container direction="column" justify="center">
          <Grid container justify="center" alignItems="center">
            <Logo />
          </Grid>
          <StyledContent direction="column" container alignItems="center">
            <StyledTitle component="h1" variant="h1" align="center" back="dark">{headerText}</StyledTitle>
            <StyledParagraph variant="body1">{mainText}</StyledParagraph>
            <StyledGoHome href="/" variant="outlined">Вернуться на главную</StyledGoHome>
          </StyledContent>
        </StyledFullHeight>
      </Grid>
    </BgImageTransparent>
  );
};

InfoPage.propTypes = {
  backImg: PropTypes.string,
  bgColor: PropTypes.string,
  headerText: PropTypes.string,
  mainText: PropTypes.string
};

InfoPage.defaultProps = {
  backImg: '',
  bgColor: '',
  headerText: '',
  mainText: ''
};

export { InfoPage };
