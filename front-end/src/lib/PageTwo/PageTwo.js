import React from 'react';
import Button from '../Button/Button'


export default class PageTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>YAML Viewer</h1>
        <div style={{ float: 'left' }}>
          <span style={{ display: 'inline' }}>Viewing YAML of URL: </span>
          <span style={{ display: 'inline', color: 'white' }}>{this.props.url}</span>
        </div>
        <p>put ul, li here</p>
        <form onSubmit={this.props.changePage}>
          <Button value="go back" />
        </form>
      </React.Fragment>
    );
  }
}
