import React from 'react';
import './TextInput.css';


export default class TextInput extends React.Component {
  render() {
    return (
      <input
        className="TextInput"
        type="submit"
        value={this.props.value}
      />
    );
  }
}
