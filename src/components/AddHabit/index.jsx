import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import MenuItem from '@material-ui/core/MenuItem';
import { NumberTypeForms } from './NumberTypeForms';
import { CheckDays } from './CheckDays';
import { Transition } from '../../ui/Transition';
import { NavbarSub } from '../../ui/NavbarSub';

import { StyledFormControl, StyledInputNewHabit } from './styled';
import { StyledBackForm, StyledForm, StyledButton } from '../../ui/formStyled';
import { StyledContent } from '../../globalStyled';

const AddHabit = (props) => {
  const {
    touched, errors, values, openDialog,
    handleChange, handleBlur, handleSubmit, closeDialog
  } = props;
  return (
    <Dialog fullScreen open={openDialog === 'addHabit'} onClose={closeDialog} TransitionComponent={Transition}>
      <Grid container justify="center">
        <NavbarSub title="Новая цель" action="back" closeDialog={closeDialog} />
        <Grid item md={6} xs={12}>
          <StyledContent container direction="column" justify="space-between">
            <StyledContent>
              <StyledBackForm container>
                <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                  <StyledInputNewHabit
                    label="Название цели"
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
                  <StyledInputNewHabit
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
                  <StyledFormControl>
                    <StyledInputNewHabit
                      id="type"
                      name="habitType"
                      select
                      label="Вариант цели"
                      value={values.habitType}
                      onChange={handleChange}
                      err={touched.habitType && errors.habitType}
                      helperText={errors.habitType}
                      margin="normal"
                    >
                      <MenuItem value=""><em>Не выбран</em></MenuItem>
                      <MenuItem value="simple">простой (да/нет)</MenuItem>
                      <MenuItem value="number">числовой</MenuItem>
                    </StyledInputNewHabit>
                  </StyledFormControl>
                  {
                  values.habitType === 'number'
                    ? <NumberTypeForms {...props} />
                    : null
                  }
                  <StyledFormControl margin="normal">
                    <StyledInputNewHabit
                      id="repeat"
                      name="habitRepeat"
                      select
                      label="В какие дни цель должна быть выполнена?"
                      value={values.habitRepeat}
                      onChange={handleChange}
                      err={touched.habitRepeat && errors.habitRepeat}
                      helperText={errors.habitRepeat}
                      margin="normal"
                    >
                      <MenuItem value=""><em>Выбрать вариант</em></MenuItem>
                      <MenuItem value="custom">Выбрать дни недели</MenuItem>
                      <MenuItem value="everyday">Ежедневно</MenuItem>
                    </StyledInputNewHabit>
                  </StyledFormControl>
                  {values.habitRepeat === 'custom'
                    ? <CheckDays {...props} />
                    : null
                  }
                  <StyledButton variant="contained" type="submit" color="secondary" fullWidth>Создать цель</StyledButton>
                </StyledForm>
              </StyledBackForm>
            </StyledContent>
          </StyledContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export { AddHabit };
