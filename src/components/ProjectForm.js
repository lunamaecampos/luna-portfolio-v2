import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.project ? props.project.title : '',
      liveLink: props.project ? props.project.liveLink : '',
      githubLink: props.project ? props.project.githubLink : '',
      description: props.project ? props.project.description : '',
      languages: props.project ? props.project.languages : {},
      pictures: props.project ? props.project.pictures : {},
      createdAt: props.project ? moment(props.project.createdAt) : moment(),
      calendarFocused: false
    };
  }
  onTitleChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ title }));
  };
  onLiveLinkChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ liveLink }));
  };
  onGithubLinkChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ githubLink }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=> ({ description }));
  };
  onLanguagesChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ languages }));
  };
  onPicturesChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ pictures }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(()=>({createdAt}));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(()=>({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(()=>({ error: 'Please provide description and amount.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        liveLink: this.state.liveLink,
        githubLink: this.state.githubLink,
        description: this.state.description,
        languages: this.state.languages,
        pictures: this.state.pictures
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Application Title"
            autoFocus
            className="text-input"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="liveLink"
            className="text-input"
            value={this.state.liveLink}
            onChange={this.onLiveLinkChange}
          />
          <input
            type="text"
            placeholder="githubLink"
            className="text-input"
            value={this.state.githubLink}
            onChange={this.onGithubLinkChange}
          />
          <input
            type="text"
            placeholder="liveLink"
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="liveLink"
            className="text-input"
            value={this.state.languages}
            onChange={this.onLanguagesChange}
          />
          <input
            type="text"
            placeholder="liveLink"
            className="text-input"
            value={this.state.pictures}
            onChange={this.onPicturesChange}
          />
          <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={()=> false}
          />
          <div>
            <button className="button">Save Project</button>
          </div>
        </form>
    )
  }
}
