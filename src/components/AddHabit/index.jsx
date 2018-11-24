import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { NavbarSub } from '../../ui/NavbarSub';
import { week } from '../../utils/week';

import { StyledFormControl, StyledSelect, StyledHeader } from './styled';
import { StyledInput, StyledBackForm, StyledForm, StyledButton } from '../../ui/formStyled';
import { StyledContent } from '../../globalStyled';

const AddHabit = (props) => {
  const {
    touched, errors, values, checkedA,
    handleChange, handleBlur, handleSubmit, handleFormat
  } = props;
  return (
    <Grid container justify="center">
      <NavbarSub title="Новая задача" action="back" />
      <Grid item md={6} xs={12}>
        <StyledContent container direction="column" justify="space-between">
          <StyledContent>
            <StyledBackForm container>
              <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                <StyledInput
                  label="Название задачи"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.habitName && errors.habitName}
                  type="text"
                  id="name"
                  name="habitName"
                  value={values.habitName}
                  placeholder="Пример: Делать зарядку"
                  helperText={errors.habitName}
                  fullWidth
                  margin="normal"
                  size="big"
                />
                <StyledInput
                  label="Описание"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.habitDescr && errors.habitDescr}
                  type="text"
                  id="descr"
                  name="habitDescr"
                  value={values.habitDescr}
                  placeholder="Пример: уделять зарядке 15 минут в день"
                  helperText={errors.habitDescr}
                  fullWidth
                  margin="normal"
                />
                <StyledFormControl margin="normal">
                  <InputLabel shrink htmlFor="type">Тип задачи</InputLabel>
                  <StyledSelect
                    value={values.habitType}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{
                      name: 'habitType',
                      id: 'type'
                    }}
                  >
                    <MenuItem value=""><em>Не выбран</em></MenuItem>
                    <MenuItem value="simple">простой (да/нет)</MenuItem>
                    <MenuItem value="number">числовой</MenuItem>
                  </StyledSelect>
                </StyledFormControl>
                {
                 values.habitType === 'number'
                   ? (
                     <Fragment>
                       <StyledHeader variant="subtitle1" gutterBottom>Когда считать задачу выполненной?</StyledHeader>
                       <StyledHeader variant="subtitle1">
                         Когда я выполняю задачу
                         {values.habitName ? ` "${values.habitName}"` : (<em> тут будет название</em>)}
                       </StyledHeader>
                       <Grid container alignItems="center" justify="space-between" spacing={16}>
                         <Grid item xs={4}>
                           <StyledFormControl>
                             <Select
                               value={values.habitCondition}
                               onChange={handleChange}
                               displayEmpty
                               inputProps={{
                                 name: 'habitCondition',
                                 id: 'condition'
                               }}
                             >
                               <MenuItem value=""><em>Не выбран</em></MenuItem>
                               <MenuItem value="less">Не больше чем</MenuItem>
                               <MenuItem value="more">Не меньше чем</MenuItem>
                               <MenuItem value="equally">Равно</MenuItem>
                             </Select>
                           </StyledFormControl>
                         </Grid>
                         <Grid item xs={2}>
                           <StyledInput
                             label=""
                             onChange={handleChange}
                             onBlur={handleBlur}
                             err={touched.habitHours && errors.habitHours}
                             type="number"
                             id="hours"
                             name="habitHours"
                             value={values.habitHours}
                             placeholder="2"
                           />
                         </Grid>
                         <Grid item xs={3}>
                           <StyledInput
                             label=""
                             onChange={handleChange}
                             onBlur={handleBlur}
                             err={touched.habittypeHours && errors.habittypeHours}
                             type="text"
                             id="typeHours"
                             name="habittypeHours"
                             value={values.habittypeHours}
                             placeholder="часов"
                           />
                         </Grid>
                         <Grid item xs={3}>
                           <StyledHeader variant="subtitle1" gutterBottom>в день</StyledHeader>
                         </Grid>
                       </Grid>
                     </Fragment>
                   )
                   : null
                }
                <StyledFormControl margin="normal">
                  <InputLabel shrink htmlFor="repeat">Когда задачу нужно повторять</InputLabel>
                  <StyledSelect
                    value={values.habitRepeat}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{
                      name: 'habitRepeat',
                      id: 'repeat'
                    }}
                  >
                    <MenuItem value=""><em>Выбрать вариант</em></MenuItem>
                    <MenuItem value="custom">Выбрать дни недели</MenuItem>
                    <MenuItem value="everyday">Ежедневно</MenuItem>
                  </StyledSelect>
                </StyledFormControl>
                {values.habitRepeat === 'custom'
                  ? (
                    <FormGroup row>
                      {
                        week.map((item, indx) => (
                          <FormControlLabel
                            key={`check-${indx}`}
                            control={(
                              <Checkbox
                                checked={checkedA}
                                onChange={handleFormat('checkedA')}
                                value="checkedA"
                              />
                            )}
                            label={item}
                          />
                        ))
                      }
                    </FormGroup>)
                  : null
                }
                <StyledButton variant="contained" type="submit" color="secondary" fullWidth>Создать задачу</StyledButton>
              </StyledForm>
            </StyledBackForm>
          </StyledContent>
        </StyledContent>
      </Grid>
    </Grid>
  );
};

AddHabit.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  checkedA: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFormat: PropTypes.func
};

AddHabit.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  checkedA: false,
  handleSubmit: () => false,
  handleChange: () => false,
  handleBlur: () => false,
  handleFormat: () => false
};

export { AddHabit };
