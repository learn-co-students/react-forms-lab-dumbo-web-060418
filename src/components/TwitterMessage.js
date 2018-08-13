import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleTweet} />
        <h1>You have {this.props.maxChars - this.state.tweet.length} </h1>
      </div>
    );
  }
}

export default TwitterMessage;
