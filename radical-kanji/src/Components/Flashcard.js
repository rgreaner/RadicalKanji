import React, { Component } from 'react';
import Kanji from './Kanji'

class Flashcard extends Component {
  render() {
    let kanjiList;
    if (this.props.flashcard) {
        kanjiList = this.props.flashcard.map(indivKanji => {
            //console.log(indivKanji);
            return (
                <Kanji key={indivKanji.meaning} kanji={indivKanji} />
            )
        })
    }
    
    console.log(this.props)
    return (
      <div className="Flashcard">
        Kanji cards
        {kanjiList}
      </div>
    );
  }
}

export default Flashcard;