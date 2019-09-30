import React from 'react';
import ReactDOM from 'react';

class TypeWriter extends React.Component {

  state = {
    text: '',
    loopNum: 0,
    index: 0,
    textColor: ''
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
    let textColor = ['#97C379', '#9662AA', '#AE4B44'];

    this.setState({text: word, index:++index, textColor: textColor[i]});
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
        and I Am a{!this.state.text.slice(0,1).match(/[aeiou]/gi) || 'n'} <span style={{color:this.state.textColor}}>{ this.state.text }</span>
      </div>
    );
  }
}

export { TypeWriter }
