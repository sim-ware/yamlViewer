import React from 'react';


export default class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleInputChange(event) {
    console.log('*test', event)
  }

  changePage(event) {
    console.log('*test', event)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>YAML Viewer</h1>
        <p>
          please enter the GitHub URL of the YAML file you would like to view:
        </p>
        <form onSubmit={this.changePage}>
          <input
            style={{ width: 600 }}
            type="text"
            name="url"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={{ borderColor: '#282c34', backgroundColor:'#09d3ac', color: '#282c34', width: 300 }}
            type="submit"
            value="view"
          />
        </form>
      </div>
    );
  }
}
