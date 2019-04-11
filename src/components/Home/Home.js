import React from 'react';
import Section from './../UI/Section/Section';

import Input from './../UI/Input/Input';

const home = props => {
  return (
    <Section>
      <Input label="mylabel" type="email" name="email" />
      <br />
      <Input label="mylabel" type="password" name="email" />
      <p>home</p>
    </Section>
  );
};

export default home;