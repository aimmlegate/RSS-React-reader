import React from 'react';
import FormContainer from '../containers/FormContainer';
import AlertContainer from '../containers/AlertContainer';

const Main = () => (
  <div>
    <FormContainer></FormContainer>
    <div className='container'>
      <AlertContainer></AlertContainer>
    </div>
  </div>
);

export default Main;
