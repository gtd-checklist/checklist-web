import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ConfirmBlock } from '../../ui/ConfirmBlock';
import { Transition } from '../../ui/Transition';
import { NavbarSub } from '../../ui/NavbarSub';
import { ButtonUI } from '../../ui/ButtonUI';

import { StyledPaper, StyledMobileStepper, StyledInputReview, StyledDate, StyledDialog } from './styled';
import { BgImageTransparent, StyledContent } from '../../globalStyled';
import back from '../../img/back-lake.jpg';

const Review = (props) => {
  const {
    activeStep, values, touched, errors, maxSteps, date, habits, openDialog,
    handleSubmit, handleChange, handleBlur, onCancel, onCheck, closeDialog
  } = props;
  return (
    <StyledDialog
      fullScreen
      open={openDialog === 'reviewHabit'}
      onClose={closeDialog}
      TransitionComponent={Transition}
    >
      <BgImageTransparent container justify="center" back={back} color="primary">
        <NavbarSub title="Ревью достижения целей" actionType="back" coloricon="white" closeDialog={closeDialog} />
        <Grid item md={6} xs={12}>
          <StyledContent container direction="column" justify="space-between">
            <StyledContent>
              {activeStep < maxSteps
                ? (
                  <Fragment>
                    <StyledDate align="right" variant="body1" gutterBottom>
                      Цели, запланированные на:
                      <br />
                      <strong>{date}</strong>
                    </StyledDate>
                    <StyledPaper elevation={0}>
                      <Typography align="center" variant="h3" gutterBottom>{habits[activeStep].name}</Typography>
                      <Typography align="center" variant="subtitle1">{habits[activeStep].description}</Typography>
                      { habits[activeStep].isNumerical
                        ? (
                          <form noValidate autoComplete="off">
                            <StyledInputReview
                              id="result"
                              label="Результат выполнения"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              err={touched.userResult && errors.userResult}
                              name="userResult"
                              value={values.userResult}
                              helperText={errors.userResult}
                              fullWidth
                              margin="normal"
                            />
                          </form>
                        )
                        : null
                      }
                    </StyledPaper>
                    <StyledMobileStepper
                      steps={maxSteps}
                      variant="text"
                      position="bottom"
                      activeStep={activeStep}
                      nextButton={
                        (
                          <ButtonUI
                            handleClick={habits[activeStep].isNumerical
                              ? handleSubmit
                              : onCheck}
                            type="check"
                            sizeui="large"
                          />
                        )
                      }
                      backButton={
                        !habits[activeStep].isNumerical
                          ? <ButtonUI handleClick={onCancel} type="cancel" sizeui="large" />
                          : null
                      }
                    />
                  </Fragment>
                )
                : <ConfirmBlock closeDialog={closeDialog} text="Нет больше целей для ревью" />
            }
            </StyledContent>
          </StyledContent>
        </Grid>
      </BgImageTransparent>
    </StyledDialog>
  );
};

Review.propTypes = {
  activeStep: PropTypes.number,
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  habits: PropTypes.instanceOf(Object),
  maxSteps: PropTypes.number,
  date: PropTypes.string,
  openDialog: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  onCheck: PropTypes.func,
  onCancel: PropTypes.func,
  closeDialog: PropTypes.func
};

Review.defaultProps = {
  activeStep: 0,
  touched: {},
  errors: {},
  values: {},
  habits: {},
  maxSteps: 0,
  date: '',
  handleSubmit: () => false,
  handleChange: () => false,
  handleBlur: () => false,
  onCheck: () => false,
  onCancel: () => false,
  closeDialog: () => false
};

export { Review };
