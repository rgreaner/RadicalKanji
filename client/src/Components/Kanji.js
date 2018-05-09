import React, { Component } from 'react';


class Kanji extends Component {
  state = {
      flipped: false,
      kanjiInfo: []
  }

  componentDidMount() {
    this.setState({
      ...this.props.kanjiShown
    })
};


    
  flipCard() {
    console.log(this.state)
    if (this.state.flipped===false) {
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
          {this.props.kanjiShown.kanjiLook} <br />
          {this.props.kanjiShown.kanjiStory} <br />
          {this.props.kanjiShown.kanjiStroke} <br />
          {/* {this.state.kanjiLook} <br /> */}
          <button type="button" className="flipOp" onClick={this.flipCard.bind(this)}>Flip Card</button>
          <button type="button" className="nextKanji" onClick={this.props.changeCard.bind(this)}>Next Kanji</button>
        </div>
          :
        <div>
          <div>
          {/* {this.props.kanjiShown.kanjiMeaning}<br /> */}
          </div>
          <button type="button" className="flipOp" onClick={this.flipCard.bind(this)}>Flip Card</button>
        </div>
        }
      </li>
      
    );
  }
}
export default Kanji;