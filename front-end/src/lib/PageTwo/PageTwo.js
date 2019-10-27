import React from 'react';


export default class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: 'www.scoop.com'};
  }

  render() {
    return (
      <div>
        <h1>YAML Viewer</h1>
        <p>Viewing YAML: {this.state.url}</p>
        <p>put ul, li here</p>
        <p>view new YAML</p>
      </div>
    );
  }
}
