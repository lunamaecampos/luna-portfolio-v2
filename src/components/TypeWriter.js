import React from 'react';
import ReactDOM from 'react';

class TypeWriter extends React.Component {

  state = {
    text: '',
    loopNum: 0,
    index: 0
  }
  componentDidMount() {
    setTimeout(this.handleType, 1000);
  }

  handleType = () => {
    const { dataText } = this.props;
    const {loopNum, text} = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    let { index } = this.state;
    let word = fullText.slice(0, index);

    this.setState({text: word, index:++index});
    if(word.length === fullText.length) {
      this.setState({loopNum: loopNum+1, index:0});
      setTimeout(this.handleType, 3000);
    } else {
    setTimeout(this.handleType, 60);
    }
  };
  render() {
    return (
      <div className="landing-subtitle typewriter">
        { this.state.text }
      </div>
    );
  }
}

export { TypeWriter }
