import React from 'react'
import Button from '../Button/Button'


const PrettyPrintJson = ({data}) => (
  <div style={{ fontSize: 10, textAlign: 'left' }}>
    <pre>
    { JSON.stringify(data, null, 2) }
    </pre>
  </div>
);

export default class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: null };
  }

  async yamlUrlToJsonFetch() {
    const endpoint = 'http://localhost:3100/view-yaml'
    const data = { url: this.props.url }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const json = await response.json()
    this.setState({ json })
  }

  async UNSAFE_componentWillMount() {
    await this.yamlUrlToJsonFetch()
  }

  render() {
    return (
      <React.Fragment>
        <h1>YAML Viewer</h1>
        <div style={{ float: 'left' }}>
          <span style={{ display: 'inline' }}>Viewing YAML of URL: </span>
          <span style={{ display: 'inline', color: 'white' }}>{this.props.url}</span>
        </div>
        <span>{"JSON"}</span>
        <PrettyPrintJson style={{ fontSize: 10 }} data={this.state.json} />
        <form onSubmit={this.props.changePage}>
          <Button value="go back" />
        </form>
      </React.Fragment>
    );
  }
}
