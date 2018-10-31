import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, StyledError, StyledHint } from './styled';

const Input = (props) => {
  const { label, isRequired, error } = props;

  return (
    <Fragment>
      <StyledLabel htmlFor="name">
        {label}
        {(isRequired && !error)
          ? <StyledHint>*</StyledHint>
          : <StyledError>{error}</StyledError>
        }
      </StyledLabel>
      <StyledInput {...props} />
    </Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

Input.defaultProps = {
  id: null,
  name: '',
  type: 'text',
  value: '',
  label: '',
  error: '',
  placeholder: '',
  isRequired: false,
  onChange: () => null,
  onBlur: () => null
};

export { Input };
