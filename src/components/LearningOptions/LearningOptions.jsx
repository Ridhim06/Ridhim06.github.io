import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1 },
    { text: "Python", handler: props.actionProvider.handlePythonList,
     id: 2 },
    { text: "React", handler: props.actionProvider.handleReactList,
     id: 3 },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

