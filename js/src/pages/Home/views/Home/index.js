import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import FormInput from '../FormInput';

const Home = ({ classes, handleSubmit, result }) => {
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.title}>Введите полное имя сайта:</p>
        <Field
          name="url"
          placeholder="http://htmlbook.ru/"
          component={FormInput}
        />
        <Button variant="raised" color="primary" type="submit">
          Парсить
        </Button>
      </form>
      {result && (
        <div className={classes.results}>
          {result.positive.length > 0 && (
            <ul>
              {result.positive.map((item) => {
                return (
                  <li key={item} className={classes.item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
          {result.negative.length > 0 && (
            <ul>
              {result.negative.map((item) => {
                return (
                  <li key={item} className={classes.negativeItem}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired
};

export default compose(
  reduxForm(),
  withStyles(styles)
)(Home);
