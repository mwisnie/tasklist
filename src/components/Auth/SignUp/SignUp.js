import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import Button from './../../UI/Button/Button';
import Input from './../../UI/Input/Input';
import Section from './../../UI/Section/Section';

const controlsConfig = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password'
  },
  {
    type: 'password',
    name: 'passwordConfirm',
    label: 'Confirm password'
  }
];

const signUp = props => {

  const initialState = {};
  controlsConfig.forEach(control => {
    initialState[control.name] = {
      value: ''
    };
  });
  const [controlState, setControlState] = useState(initialState);

  const onChange = event => {
    setControlState({
      ...controlState,
      [event.target.name]: {
        value: event.target.value
      }
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const results = [];
    for (let key in controlState) {
      results.push(controlState[key].value)
    }
    console.log(results);
  }

  return (
    <Section>
      <Typography variant="h5" color="inherit">
        Sign Up
      </Typography>

      <form onSubmit={ev => onSubmit(ev)}>
        {controlsConfig.map(config => (
          <React.Fragment key={config.label}>
            <Input
              label={config.label}
              type={config.type}
              name={config.name}
              value={controlState[config.name].value}
              onChange={onChange} />
            <br />
          </React.Fragment>
        ))}

        <Button 
          type={'submit'}
          color={'primary'} 
          disabled={false}
          size={'large'}>
          Submit
        </Button>

      </form>
    </Section>
  );
};

export default signUp;