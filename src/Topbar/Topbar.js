import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    const anyVariable = '';
    this.state = {title: 'Change Label'}
  }
  
  render() {
    return (
      <div className="topBar">
        <ul>
          <li><Link to="/">{this.state.title}</Link></li>
          <li><Link to="/">Exercise1</Link></li>
          <li><Link to="/">Exercise2</Link></li>
        </ul>
      </div>
    );
  }
}

export default Topbar;
