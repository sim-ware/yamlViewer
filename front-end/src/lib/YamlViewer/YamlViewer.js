import React from 'react';
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'


export default class YamlViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: null, homePage: true };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleInputChange(event) {
    const url = event.target.value
    this.setState({ url })
  }

  changePage(event) {
    if (this.state.homePage) {
      this.setState({ homePage: false })
    } else {
      this.setState({ homePage: true })
    }
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.homePage
          ? <PageOne
              handleInputChange={this.handleInputChange}
              changePage={this.changePage}
            />
          : <PageTwo
              url={this.state.url}
              changePage={this.changePage}
            />}
      </React.Fragment>
    );
  }
}
