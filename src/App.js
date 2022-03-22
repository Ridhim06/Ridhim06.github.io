import React, {useState} from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import "./App.css";

function App() {
  const [showBot, toggleBot]= useState(false);
  const saveMessages = (messages, HTMLString) => {
    console.log("messages",messages)
    localStorage.setItem('chat_messages',JSON.stringify(messages));
  };
  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}

          messageParser={MessageParser}
          saveMessages={(messages,HTMLString)=>saveMessages(messages,HTMLString)}

        />
        )}
              <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>

      </div>
    </div>
  );
}

export default App;