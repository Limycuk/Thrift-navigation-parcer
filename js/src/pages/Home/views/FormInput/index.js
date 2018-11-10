import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const FormInput = ({
  classes,
  input: { value, onChange, name },
  meta: { error, submitFailed },
  label,
  helperText,
  isFullWidth,
  type,
  className,
  isDisabled,
  placeholder
}) => {
  return (
    <FormControl
      fullWidth={isFullWidth}
      margin="normal"
      className={classNames(classes.container, className)}
      disabled={isDisabled}>
      {label && (
        <InputLabel htmlFor={name} error={submitFailed && !_.isNil(error)}>
          {label}
        </InputLabel>
      )}
      <Input
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth={isFullWidth}
        type={type}
        inputProps={{
          autoComplete: 'off'
        }}
        error={submitFailed && !_.isNil(error)}
      />
      {helperText && <FormHelperText>helperText</FormHelperText>}
      {submitFailed && error && <span className={classes.error}>{error}</span>}
    </FormControl>
  );
};

FormInput.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    submitFailed: PropTypes.bool.isRequired
  }).isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

FormInput.defaultProps = {
  label: null,
  helperText: null,
  isFullWidth: true,
  type: 'text',
  isDisabled: false
};

export default withStyles(styles)(FormInput);
