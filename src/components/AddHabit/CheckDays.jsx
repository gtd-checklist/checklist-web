import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { StyledLabel } from './styled';
import { week } from '../../utils/week';

const CheckDays = (props) => {
  const { touched, errors, values, setFieldValue } = props;
  return (
    <FormGroup row>
      {
        week.map((item, indx) => (
          <FormControlLabel
            key={`check-${indx}`}
            control={(
              <Checkbox
                name="habitDays"
                checked={values.habitDays[indx]}
                err={touched.habitDays && errors.habitDays}
                onChange={() => {
                  values.habitDays[indx] = !values.habitDays[indx];
                  setFieldValue('check', !values.habitDays[indx]);
                }
                }
              />
            )}
            label={<StyledLabel variant="body2">{item}</StyledLabel>}
          />
        ))
      }
      <div>{touched.habitDays && errors.habitDays}</div>
    </FormGroup>
  );
};

CheckDays.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  setFieldValue: PropTypes.func
};

CheckDays.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  setFieldValue: () => false
};

export { CheckDays };
