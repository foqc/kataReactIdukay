import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <p className="App-intro">
          Kata Idukay
        </p>
        <img className="example" src="/assets/kataNash.png"/>
      </div>
    );
  }
}

export default Main;
