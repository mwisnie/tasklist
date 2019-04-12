import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionCreators from './../../../store/Auth/actionCreators';
import Button from './../../UI/Button/Button';
import ErrorMsg from './../../UI/ErrorMsg/ErrorMsg';
import Input from './../../UI/Input/Input';
import { checkInputForErrors } from './../../UI/Input/validation-utils';
import Section from './../../UI/Section/Section';

const controlsConfig = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validationRules: {
      required: true,
      isEmail: true
    }
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    validationRules: {
      required: true
    }
  }
];

const login = props => {
  const initialState = {
    formValid: false
  };
  controlsConfig.forEach(control => {
    initialState[control.name] = {
      value: '',
      error: null,
      validationRules: control.validationRules
    };
  });

  const [controlState, setControlState] = useState(initialState);

  const onChange = event => {
    let error = checkInputForErrors(event.target.value,
      controlState[event.target.name].validationRules);

    const newControlState = {
      ...controlState,
      [event.target.name]: {
        value: event.target.value,
        error: error,
        validationRules: {
          ...controlState[event.target.name].validationRules
        }
      },
      formValid: true
    }

    for (let key in newControlState) {
      if (newControlState[key].error || newControlState[key].value === '') {
        newControlState.formValid = false;
        break;
      }
    }
    setControlState({
      ...newControlState
    });
  }

  const onSubmit = event => {
    event.preventDefault();

    props.login({
      email: controlState['email'].value,
      password: controlState['password'].value
    });
  }


  const form = (
    <form onSubmit={onSubmit}>
      {controlsConfig.map(config => (
        <React.Fragment key={config.label}>
          <Input
            label={config.label}
            type={config.type}
            name={config.name}
            value={controlState[config.name].value}
            onChange={onChange}
          />
          <ErrorMsg error={controlState[config.name].error} />
          <br />
        </React.Fragment>
      ))}

      <Button
        type={'submit'}
        color={'primary'}
        disabled={!controlState.formValid}
        size={'large'}>
        Submit
      </Button>
    </form>
  );


  const loggedInRedirect = props.isAuthenticated ? <Redirect to="/home"/> : null;

  return (
    <Section>
      {loggedInRedirect}
      <Typography variant="h5" color="inherit">
        Log in
      </Typography>
      {form}
    </Section>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => dispatch(actionCreators.login(loginData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);