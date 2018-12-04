import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const Temp = () => (
  <Grid container direction="column" alignItems="center" justify="center">
    <Typography variant="h2" align="center" gutterBottom>Страница в разработке</Typography>
    <CircularProgress color="secondary" />
    <Button variant="outlined" href="/" color="secondary">Перейти на главную</Button>
  </Grid>
);


export { Temp };
