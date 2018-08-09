import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      tweetLength: 140
    };
  }

  handleChange = (event) => {
    let lengthOfTweet = this.props.maxChars - event.target.value.length

    this.setState({
      tweet: event.target.value,
      tweetLength: lengthOfTweet
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.tweet} />
        <div>
          You have {this.state.tweetLength < 0 ? 0 : this.state.tweetLength} characters left
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
