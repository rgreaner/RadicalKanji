import React, { Component } from 'react';


class Kanji extends Component {
  state = {
      flipped: false,
      kanjiInfo: []
  }

  componentDidMount() {
    this.setState({
      ...this.props.kanji
    //axios.get ("dbroute", {})
    //.then (res => {
      //change to string
    }
  )

};

  flipCard() {
    if (!this.state.flipped) {
      this.setState({flipped: true})
    }
    else {
      this.setState({flipped: false})
    }
  }

  render() {
    console.log(this.state)
    
    return (
      <li className="Kanji">
        {this.state.flipped ? 
          <div>
            <div>{this.state.meaning}</div>
            <button type="button" className="flipOp" onClick={this.flipCard}>Flip Card</button>
          </div>
          :
          <div>
            {this.state.kanjiLook} <br />
            {this.state.kanjiStory} <br />
            {this.state.kanjiStroke} <br />
            {this.state.kanjiLook} <br />
            <button type="button" className="flipOp" onClick={this.flipCard}>Flip Card</button>
          </div>
        }
      </li>
      
    );
  }
}
export default Kanji;