import React from 'react';
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'

export default class YamlViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'www.scoop.com',
      mode: 'test'
    };
  }

  render() {
    return (
      <div>
        {this.state.mode === 'test'
          ? <PageOne />
          : <PageTwo />}
      </div>
    );
  }
}
