import React from "react";
import PropTypes from "prop-types";
import WelcomeScren from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScren errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
