import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyle = {
  background:
    'linear-gradient(90deg, #165916 0%, #1B6F1B 25%, #228B22 62%, #C5E1C5 100%)',
  color: 'white',
};

const HeaderBar = ({ title }) => (
  <div className="header">
    <AppBar position="static" color="default" style={headerStyle}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          {title.pageTitle || 'Page Title Placeholder'}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

HeaderBar.propTypes = {
  title: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired,
  }),
};

HeaderBar.defaultProps = {
  title: {
    pageTitle: 'Page Title Placeholder',
  },
};

export default HeaderBar;