import React from "react";
import { Message, MessageContainer, MessageListContainer } from "./style.js";
class MessageList extends React.Component {
  render() {
    return (
      <MessageListContainer>
        {this.props.messages.map((message, i) => {
          return (
            <MessageContainer key={i} isBotReply={message.isBotReply}>
              <Message>
                {message.msg}
              </Message>
            </MessageContainer>
          )
        })}
      </MessageListContainer>
    )
  }
}
export default MessageList;