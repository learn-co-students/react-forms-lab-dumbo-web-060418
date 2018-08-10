import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      counter: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value,
        counter: this.state.counter - 1
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange}
        value={this.state.input}/>
        <p>characters left: {this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
