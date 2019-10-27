import React from 'react';
import TextInput from '../TextInput/TextInput'


export default class PageTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>YAML Viewer</h1>
        <p>Viewing YAML of URL: {this.props.url}</p>
        <p>put ul, li here</p>
        <form onSubmit={this.props.changePage}>
          <TextInput value={"go back"} />
        </form>
      </React.Fragment>
    );
  }
}
