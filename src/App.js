import React from "react";
import { Title } from "./style.js";
import SendMessageForm from "./SendMessageForm.js";
import MessageList from "./MessageList.js";
import httpClient from "axios";
const axios = httpClient.create();
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  submitMessage = (msg) => {
    let message = [{
      isBotReply: false,
      msg: msg
    }]
    this.setState({ messages: [...this.state.messages, ...message] });
    let botDetail = {
      "botKey": "echobot",
      "message": msg
    };
    return Promise.resolve(
      axios({
        method: "post",
        url: "http://localhost:8080/bot",
        data: botDetail,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).then(response => {
      
      if(response && response.status == 200 && response.data &&response.data.response ){
        let message = [response.data.response];
        console.log(message);
        this.setState({ messages: [...this.state.messages, ...message] });
      }
    }).catch(err=>{
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        <Title>Echo Bot</Title>
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.submitMessage} />
      </div>
    );
  }
}

export default App;
