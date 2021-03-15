import React from "react";
import {SendInputBox} from "./style.js";
class SendMessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <SendInputBox
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Write Here..."
          type="text" />
      </form>
    )
  }
}


export default SendMessageForm;