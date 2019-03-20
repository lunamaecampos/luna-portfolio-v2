import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import FileUploader from "react-firebase-file-uploader";
import { firebase, googleAuthProvider } from '../firebase/firebase';
export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.project ? props.project.title : '',
      liveLink: props.project ? props.project.liveLink : '',
      githubLink: props.project ? props.project.githubLink : '',
      description: props.project ? props.project.description : '',
      languages: props.project ? props.project.languages : '',
      picture: props.project ? props.project.picture : '',
      prevPictureUrlRef: props.project ? props.project.picture : '',
      pictureUrl: props.project ? props.project.pictureUrl : '',
      createdAt: props.project ? moment(props.project.createdAt) : moment(),
      isUploading: false,
      progress: 0,
      calendarFocused: false
    };
    this.submission = false;
  }
  componentWillUnmount () {
    const prevPictureUrlRef = firebase.storage().ref(`images/${this.state.prevPictureUrlRef}`)
    if (
      this.state.progress===100
      && this.state.pictureUrl!=prevPictureUrlRef
      && this.state.prevPictureUrlRef!=''
      && this.submission===false
    ) {
      firebase.storage().ref(`images/${this.state.picture}`).delete()
    }
  }
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0});
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.log(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ picture: filename, progress: 100, isUploading: false });
    firebase.storage().ref(`images/${filename}`).getDownloadURL().then(
      url => this.setState({pictureUrl: url})
    )
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(()=>({ title }));
  };
  onLiveLinkChange = (e) => {
    const liveLink = e.target.value;
    this.setState(()=>({ liveLink }));
  };
  onGithubLinkChange = (e) => {
    const githubLink = e.target.value;
    this.setState(()=>({ githubLink }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=> ({ description }));
  };
  onLanguagesChange = (e) => {
    const languages = e.target.value;
    this.setState(()=>({ languages }));
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
    if (!this.state.title) {
      this.setState(()=>({ error: 'Please provide a title for your project'}));
    } else {
      this.setState(() => ({error: ''}));
      const prevPictureUrlRef = firebase.storage().ref(`images/${this.state.prevPictureUrlRef}`)
      if (
        this.state.prevPictureUrlRef != ''
        && this.state.progress===100
      ) {
        prevPictureUrlRef.delete()
      }
      this.submission = true;
      this.props.onSubmit({
        title: this.state.title,
        liveLink: this.state.liveLink,
        githubLink: this.state.githubLink,
        description: this.state.description,
        languages: this.state.languages,
        picture: this.state.picture,
        pictureUrl: this.state.pictureUrl,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Project Title"
            autoFocus
            className="text-input"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Live Link"
            className="text-input"
            value={this.state.liveLink}
            onChange={this.onLiveLinkChange}
          />
          <input
            type="text"
            placeholder="Github Link"
            className="text-input"
            value={this.state.githubLink}
            onChange={this.onGithubLinkChange}
          />
          <textarea
            type="text"
            placeholder="Project Description"
            className="textarea"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Languages"
            className="text-input"
            value={this.state.languages}
            onChange={this.onLanguagesChange}
          />
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.pictureUrl &&
            <img
            className="image-upload-preview"
            value={this.state.pictureUrl}
            onChange={this.onPictureUrlChange}
            src={this.state.pictureUrl}
            />
          }
          <FileUploader
            accept="image/*"
            name="picture"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadSuccess}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
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
            <input type="submit" value="Save Project" className="button" />
          </div>
        </form>
    )
  }
}
