import React from 'react';
import Button from '../Button/Button'


export default class PageOne extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>YAML Viewer</h1>
        <p>please enter the GitHub URL of the YAML file you would like to view:</p>
        <form onSubmit={this.props.changePage}>
          <input style={{ width: 600 }} type="text" onChange={this.props.handleInputChange} />
          <br />
          <Button value="view" />
        </form>
      </React.Fragment>
    );
  }
}
