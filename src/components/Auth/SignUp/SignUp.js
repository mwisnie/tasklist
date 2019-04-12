import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './../../../store/Auth/actionCreators';
import Button from './../../UI/Button/Button';
import ErrorMsg from './../../UI/ErrorMsg/ErrorMsg';
import Input from './../../UI/Input/Input';
import { checkInputForErrors } from './../../UI/Input/validation-utils';
import Section from './../../UI/Section/Section';
import { Redirect } from 'react-router-dom';

// if changed, adjust matching password validation
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
      required: true,
      minLength: 6
    }
  },
  {
    type: 'password',
    name: 'passwordConfirm',
    label: 'Confirm password',
    validationRules: {
      required: true
    }
  }
];


const signUp = props => {
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


  const onChangeHandler = event => {
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

    // check if passwords match
    newControlState['passwordConfirm'].error =
      (newControlState['password'].value !== ''
        && newControlState['passwordConfirm'].value !== ''
        && newControlState['password'].value !== newControlState['passwordConfirm'].value) ?
        'Passwords must match.' : newControlState['passwordConfirm'].error;

    for (let key in newControlState) {
      if (newControlState[key].error || newControlState[key].value === '') {
        newControlState.formValid = false;
        break;
      }
    }
    setControlState({
      ...newControlState
    });
  };


  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.signup({ 
      email: controlState['email'].value, 
      password: controlState['password'].value 
    });
  };


  const form = (
    <form onSubmit={ev => onSubmitHandler(ev)}>
      {controlsConfig.map(config => (
        <React.Fragment key={config.label}>
          <Input
            label={config.label}
            type={config.type}
            name={config.name}
            value={controlState[config.name].value}
            error={controlState[config.name].error !== null}
            onChange={onChangeHandler} />
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

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Section>
      <Typography variant="h5" color="inherit">
        Sign Up
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
    signup: signupData => dispatch(actionCreators.signup(signupData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signUp);