import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import { StyledFormControl, StyledHeader, StyledInputNewHabit } from './styled';

const NumberTypeForms = (props) => {
  const { touched, errors, values, handleChange, handleBlur } = props;
  return (
    <Fragment>
      <StyledHeader variant="h5" gutterBottom>
        Когда считать день успешным?
      </StyledHeader>
      <StyledHeader variant="h6" gutterBottom>
        Когда я выполню цель
        {values.habitName ? (
          ` "${values.habitName}"`
        ) : (
          '_____________'
        )}
      </StyledHeader>
      <Grid container alignItems="flex-end" justify="space-between" spacing={16}>
        <Grid item xs={4}>
          <StyledFormControl>
            <StyledInputNewHabit
              id="condition"
              name="habitCondition"
              select
              label="условие"
              value={values.habitCondition}
              onChange={handleChange}
              err={touched.habitCondition && errors.habitCondition}
            >
              <MenuItem value=""><em>Не выбран</em></MenuItem>
              <MenuItem value="less">Не больше чем</MenuItem>
              <MenuItem value="more">Не меньше чем</MenuItem>
              <MenuItem value="equally">Равно</MenuItem>
            </StyledInputNewHabit>
          </StyledFormControl>
        </Grid>
        <Grid item xs={2}>
          <StyledInputNewHabit
            label="число"
            onChange={handleChange}
            onBlur={handleBlur}
            err={touched.habitHours && errors.habitHours}
            type="text"
            id="hours"
            name="habitHours"
            value={values.habitHours}
            placeholder="пример: 2"
          />
        </Grid>
        <Grid item xs={3}>
          <StyledInputNewHabit
            label="единицы"
            onChange={handleChange}
            onBlur={handleBlur}
            err={touched.habitTypeHours && errors.habitTypeHours}
            type="text"
            id="typeHours"
            name="habitTypeHours"
            value={values.habitTypeHours}
            placeholder="пример: часов"
          />
        </Grid>
        <Grid item xs={3}>
          <StyledHeader variant="subtitle1">
            в день
          </StyledHeader>
        </Grid>
      </Grid>
    </Fragment>
  );
};

NumberTypeForms.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

NumberTypeForms.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false
};

export { NumberTypeForms };
