import React, { Component } from 'react';

class Kanji extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="Kanji">
      
      {this.props.kanji.title} - {this.props.kanji.number}
      </li>
    );
  }
}

export default Kanji;