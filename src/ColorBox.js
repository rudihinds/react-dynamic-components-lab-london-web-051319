import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    
    // if (this.props.opacity > 0.1) {
        return (  
          <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity > 0 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        </div>
        )
        }
      }
