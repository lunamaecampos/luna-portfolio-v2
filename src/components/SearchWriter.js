import React from 'react';
import ReactDOM from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { history } from '../routers/AppRouter';

class SearchWriter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checkbox: false,
      text: '',
      loopNum: 0,
      index: 0
    }
    this.onTextChange = this.onTextChange.bind(this);
  }
  componentDidMount() {
    setTimeout(this.handleType, 3000);
  }
  onTextChange = (e) => {
      this.props.setTextFilter(e.target.value)
      e.target.value.length < 2 || history.push('/projects');

  };

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
      <input
        type="text"
        className="searchbar"
        placeholder={this.state.text}
        value={this.props.filters.text}
        onChange={this.onTextChange}
        autoFocus />

    );
  }
}
const mapStateToProps = (state) => ({
    filters: state.filters
});
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchWriter);
