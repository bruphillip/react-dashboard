import React, { Component } from 'react';
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  Switch
} from '@material-ui/core';

import {
  LoginComponent,
  CardComponent,
  ButtonComponent,
  SwitchComponent,
  RememberMe
} from './login-style';

import SnackBar from '../component/snackbar';

import { keyStorage } from '../../keyStorage';

import { graphql, compose } from 'react-apollo';
import { AUTHENTICATE_USER, LOGGED_IN_USER } from '../queries/graphql-queries';
import Spinner from '../component/spinner';

class Login extends Component {
  state = {
    login: '',
    password: '',
    isRemember: !!JSON.parse(localStorage.getItem(keyStorage.isRemember)),
    isError: {
      status: false,
      message: ''
    },
    isLoading: false
  };

  redirectingToDashboard = async () => {
    if (
      !!localStorage.getItem(keyStorage.auth) &&
      !!JSON.parse(localStorage.getItem(keyStorage.isRemember))
    ) {
      await this.props.data.refetch();
      if (
        this.props.data.loggedInUser &&
        this.props.data.loggedInUser.id !== null
      ) {
        this.props.history.push('/dashboard');
      }
    }
  };

  async componentWillMount() {
    this.redirectingToDashboard();
  }

  signIn = async () => {
    try {
      this.setState({ isLoading: true });
      const signIn = await this.props.signUser({
        email: this.state.login,
        password: this.state.password
      });
      this.setState({ isLoading: false });
      localStorage.setItem(keyStorage.auth, signIn.data.authenticateUser.token);
      localStorage.setItem(keyStorage.id, signIn.data.authenticateUser.id);
      return this.props.history.push('/dashboard');
    } catch (err) {
      this.setState({
        isError: {
          status: true,
          message: getErrorMessage(err)
        },
        isLoading: false
      });
      localStorage.removeItem(keyStorage.auth);
      throw err;
    }
  };

  changeRememberSlider = () => {
    if (this.state.isRemember) {
      localStorage.setItem(keyStorage.isRemember, false);
      this.setState({ isRemember: false });
    } else {
      localStorage.setItem(keyStorage.isRemember, true);
      this.setState({ isRemember: true });
    }
  };

  render() {
    return (
      <LoginComponent>
        <CardComponent>
          <Typography component="h1" variant="h5" color="primary">
            Sign in
            {this.state.isLoading ? <Spinner /> : null}
          </Typography>

          <FormControl>
            <InputLabel htmlFor="login">Name</InputLabel>
            <Input
              id="login"
              aria-describedby="Login"
              value={this.state.login}
              onChange={e => this.setState({ login: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="component-helper-text"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </FormControl>
          <SwitchComponent>
            <RememberMe component="h8" variant="h10" color="secondary">
              Remember-me?
            </RememberMe>
            <Switch
              checked={this.state.isRemember}
              onChange={this.changeRememberSlider}
            />
          </SwitchComponent>
          <ButtonComponent
            disabled={
              this.state.login === '' && this.state.password === ''
                ? true
                : false
            }
            color="primary"
            onClick={this.signIn}
          >
            Log In
          </ButtonComponent>
        </CardComponent>
        {this.state.isError.status ? (
          <SnackBar
            open={this.state.isError.status}
            message={this.state.isError.message}
          />
        ) : null}
      </LoginComponent>
    );
  }
}

const getErrorMessage = error => {
  const message = error.message.split(': ');
  return message[message.length - 1];
};

export default compose(
  graphql(AUTHENTICATE_USER, {
    props: ({ mutate }) => ({
      signUser: ({ email, password }) =>
        mutate({
          variables: { email, password }
        })
    })
  }),
  graphql(LOGGED_IN_USER)
)(Login);
