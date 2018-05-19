import React from 'react';
import FormContainer from '../containers/FormContainer';
import AlertContainer from '../containers/AlertContainer';
import FeedsContainer from '../containers/FeedsContainer';
import ModalContainer from '../containers/ModalContainer';

const Main = () => (
  <div>
    <FormContainer></FormContainer>
    <div className='container'>
      <AlertContainer></AlertContainer>
      <FeedsContainer></FeedsContainer>
    </div>
    <ModalContainer></ModalContainer>
  </div>
);

export default Main;
