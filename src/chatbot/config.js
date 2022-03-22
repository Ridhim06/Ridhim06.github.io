import { createChatBotMessage } from 'react-chatbot-kit';
import React from "react";
import LearningOptions from '../components/LearningOptions/LearningOptions';
import LinkList from '../components/LinkList/LinkList';
const botName = "Testbot";

const config = { 

  botName: "LearningBot",

  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. I'm here to help. What do you want to learn?`, {
    widget: "learningOptions",
  }),
// ],


  // botName: botName,
  // initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?",{
  //   widget: "learningOptions",
  // }),
  // console.log("learning bot",botName)

],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "pythonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
    },
    {
      widgetName: "pythonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Python (W3Schools)",
            url:
              "https://www.w3schools.com/python/",
            id: 1,
          },
          {
            text: "Download link for Python",
            url:
              "https://www.python.org/downloads/",
            id: 2,
          },
          {
            text: "Python Tutorial (GFG)",
            url: "https://www.geeksforgeeks.org/python-programming-language/",
            id: 3,
          },
        ],
      },
    },



    {
      widgetName: "reactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
    },
    {
      widgetName: "reactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "React Documentation ",
            url:
              "https://reactjs.org/tutorial/tutorial.html",
            id: 1,
          },
          {
            text: "React Tutorial (W3Schools)",
            url:
              "https://www.w3schools.com/REACT/DEFAULT.ASP",
            id: 2,
          }
          
        ],
      },
    },





  ],
}

export default config