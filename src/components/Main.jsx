import React from "react";
import FormContainer from "../containers/FormContainer";
import AlertContainer from "../containers/AlertContainer";
import FeedsContainer from "../containers/FeedsContainer";
import ModalContainer from "../containers/ModalContainer";

const Main = () => (
  <div>
    <FormContainer />
    <div className="container-fluid">
      <AlertContainer />
      <FeedsContainer />
    </div>
    <ModalContainer />
  </div>
);

export default Main;
