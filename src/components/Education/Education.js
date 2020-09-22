import React, { Component } from 'react';
import './Education.css';

export default class Education extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { year, title, content, className } = this.props;
    return (
      <div className={className}>
        <span className="font-weight">{year}</span>
        <div className="experience">
          <p className="title font-weight">{title}</p>
          <p className="content">{content}</p>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}
