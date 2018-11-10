import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes, location: { pathname } }) => {
  return (
    <header className={classes.container}>
      <AppBar position="static">
        <Tabs value={pathname} onChange={this.handleChange}>
          <Tab label="Парсинг сайта" component={Link} to="/" value="/" />
          <Tab
            label="Список запрошенных ссылок"
            component={Link}
            to="/urls"
            value="/urls"
          />
        </Tabs>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(withStyles(styles)(Header));
