import React, { Component } from 'react';
import './Education.css';

export default class Education extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { year, title, content, className } = this.props;
    return (
      <div className={className}>
        <span>{year}</span>
        <div>
          <p className="title">{title}</p>
          <p className="content">{content}</p>
        </div>
      </div>
    );
  }
}
