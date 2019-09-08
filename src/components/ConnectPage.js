import React from 'react';


export const ConnectPage = () => (
  <div className="main-wrapper">
    <div className="title">Connect</div>
    <div className="info-card">
    <form className="form">
      <input
        type="text"
        placeholder="Name"
        autoFocus
        className="text-input"
      />
      <input
        type="text"
        placeholder="Email"
        className="text-input"
      />
      <input
        type="text"
        placeholder="Subject"
        className="text-input"
      />
      <textarea
        type="text"
        placeholder="Body"
        className="textarea"
      />
      <div>
        <input type="submit" value="Send Email" className="button" />
        </div>
      </form>
    </div>
  </div>
);

export default ConnectPage;
