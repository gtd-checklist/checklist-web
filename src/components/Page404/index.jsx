import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Logo } from '../../ui/Logo';
import back from '../../img/back-404.jpg';

import { StyledParagraph, StyledGoHome, StyledFullHeight } from './styled';
import { BgImageTransparent, StyledContent, StyledTitle } from '../../globalStyled';

const Page404 = () => (
  <BgImageTransparent container justify="center" back={back} color="primary">
    <Grid item md={6} xs={12}>
      <StyledFullHeight container direction="column" justify="center">
        <Grid container justify="center" alignItems="center">
          <Logo />
        </Grid>
        <StyledContent direction="column" container alignItems="center">
          <StyledTitle component="h1" variant="h1" align="center" back="dark">Ooops...</StyledTitle>
          <StyledParagraph variant="body1">Мы не можем найти страницу, которую Вы ищите</StyledParagraph>
          <StyledGoHome href="/" variant="outlined">Вернуться на главную</StyledGoHome>
        </StyledContent>
      </StyledFullHeight>
    </Grid>
  </BgImageTransparent>
);

export { Page404 };
