import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Review } from '../components/Review';
import { ReviewScheme } from '../utils/schemaValidators';

import { habitsData } from '../data';
import { getFullDate } from '../utils/getData';
import { dialogReviewHabitCloseAction } from '../services/dialogs/actions';

class ReviewContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      habitsReview: []
    };
  }

  onReview = (isResolved, value) => {
    const { activeStep } = this.state;
    const { habits } = habitsData;
    const maxSteps = habits.length - 1;
    const habitsId = habits[activeStep].id;
    this.setState(prevState => ({
      habitsReview: [...prevState.habitsReview, { habitsId, isResolved, value }],
      activeStep: prevState.activeStep + 1
    }));
    if (maxSteps === activeStep) {
      this.createData();
    }
  };

  onCheck = () => {
    this.onReview(true, null);
  }

  onCancel = () => {
    this.onReview(false, null);
  }

  formSubmit = (values, { resetForm }) => {
    this.onReview(null, values.userResult);
    resetForm();
  };

  createData = () => {
    const { habitsReview } = this.state;
    const resultReview = { date: habitsData.date, habitsResolution: habitsReview };
  }

  render() {
    const { activeStep } = this.state;
    const { isOpen, closeDialog } = this.props;
    const formInitValues = {
      userResult: ''
    };
    const { habits } = habitsData;
    const date = getFullDate(habitsData.date);
    const maxSteps = habits.length;
    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={ReviewScheme}
        onSubmit={this.formSubmit}
        render={props => (
          <Review
            {...props}
            habits={habits}
            activeStep={activeStep}
            maxSteps={maxSteps}
            date={date}
            isOpen={isOpen}
            onCancel={this.onCancel}
            onCheck={this.onCheck}
            closeDialog={closeDialog}
          />)
        }
      />
    );
  }
}

ReviewContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

ReviewContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false
};

const mapStateToProps = state => ({
  isOpen: state.dialogs.isOpenReviewHabitDialog
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(dialogReviewHabitCloseAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContainer);
