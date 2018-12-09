import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Review } from '../components/Review';
import { ReviewScheme } from '../utils/schemaValidators';

import { getFullDate } from '../utils/getData';
import { dialogCloseAction } from '../services/dialogs/actions';
import { addReviewHabitsAction } from '../services/review/actions';

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
    const { reviewList } = this.props;
    const { habits } = reviewList;
    const maxSteps = habits.length - 1;
    const habitId = habits[activeStep].id;
    this.setState(prevState => ({
      habitsReview: [...prevState.habitsReview, { habitId, isResolved, value }],
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
    const { addReviewHabits, reviewList } = this.props;
    const resultReview = { data: reviewList.date, habitsResolution: habitsReview };
    addReviewHabits(resultReview);
    console.log(resultReview);
  }

  closeDialogReview = () => {
    const { closeDialog } = this.props;
    closeDialog();
    this.setState({
      activeStep: 0,
      habitsReview: []
    });
  }

  render() {
    const { activeStep } = this.state;
    const { openDialog, reviewList } = this.props;
    const formInitValues = { userResult: '' };
    if (Object.keys(reviewList).length !== 0) {
      const { habits } = reviewList;
      const date = getFullDate(reviewList.date);
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
              openDialog={openDialog}
              onCancel={this.onCancel}
              onCheck={this.onCheck}
              closeDialog={this.closeDialogReview}
            />)
          }
        />
      );
    }
    return (<Review openDialog="" />);
  }
}

ReviewContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  reviewList: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

ReviewContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  reviewList: {},
  handleChange: () => false,
  handleBlur: () => false
};

const mapStateToProps = state => ({
  openDialog: state.dialogs.openDialog,
  reviewList: state.reviewList,
  activeStep: state.activeStep
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(dialogCloseAction()),
  addReviewHabits: resultReview => dispatch(addReviewHabitsAction(resultReview))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContainer);
