class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
    if (lowerCaseMessage.includes("python")) {
      this.actionProvider.handlePythonList();
    }
    if (lowerCaseMessage.includes("react")) {
      this.actionProvider.handleReactList();
    }
  }
}

export default MessageParser