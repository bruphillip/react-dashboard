import React, { useState } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ReactRouter from './dashboard-routing';
import { keyStorage } from '../../keyStorage';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menu: {
    textDecoration: 'none',
    color: '#000'
  }
};

const DashboardMain = props => {
  const { classes } = props;
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            aria-owns={isOpen ? 'simple-menu' : undefined}
            onClick={event => setIsOpen(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={isOpen}
            id="simple-menu"
            open={Boolean(isOpen)}
            onClose={event => setIsOpen(null)}
          >
            <Link
              className={classes.menu}
              to="/dashboard/"
              onClick={event => setIsOpen(null)}
            >
              <MenuItem>Home</MenuItem>
            </Link>
            <MenuItem>Create a comment</MenuItem>
            <Link
              className={classes.menu}
              to="/dashboard/comments"
              onClick={event => setIsOpen(null)}
            >
              <MenuItem>List all comments</MenuItem>
            </Link>
          </Menu>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem(keyStorage.auth);
              localStorage.removeItem(keyStorage.id);
              props.history.push('/login');
            }}
          >
            Exit
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <ReactRouter />
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 20px 10px;
`;

export default withStyles(styles)(DashboardMain);
