class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handlePythonList =() =>{
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Python:",
      {
        widget: "pythonLinks",
      }
    );

    this.updateChatbotState(message);

  }

  handleReactList =() =>{
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on React:",
      {
        widget: "reactLinks",
      }
    );

    this.updateChatbotState(message);

  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  
  updateChatbotState(message) {    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider