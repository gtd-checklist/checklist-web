import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Review } from '../components/Review';
import { ReviewScheme } from '../utils/schemaValidators';

import { habitsData } from '../data';
import { getFullDate } from '../utils/getData';

class ReviewContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      habitsReview: []
    };
  }

  onReview = (isResolved, value) => {
    const { activeStep, habitsReview } = this.state;
    const { habits } = habitsData;
    const maxSteps = habits.length - 1;
    const habitsId = habits[activeStep].id;
    this.setState(prevState => ({
      habitsReview: habitsReview.concat({ habitsId, isResolved, value }),
      activeStep: prevState.activeStep + 1
    }));
    if (maxSteps === activeStep) {
      const resultReview = { date: habitsData.date, habitsResolution: habitsReview };
      console.log(resultReview);
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

  render() {
    const { activeStep } = this.state;
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
            onCancel={this.onCancel}
            onCheck={this.onCheck}
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

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContainer);
