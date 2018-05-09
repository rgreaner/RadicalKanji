import React, { Component } from 'react';
import Kanji from './Kanji'

const testKanji = [{
    "id": 1,
    "kanjiMeaning": "Day",
    "kanjiLook": "日",
    "kanjiStory": "Pictograph of a sun...with a giant sunspot",
    "kanjiStroke": "10",
    "createdAt": null,
    "updatedAt": null,
    "UserId": null
  
},
{
  "id": 2,
    "kanjiMeaning": "Temple",
    "kanjiLook": "寺",
    "kanjiStory": "temple is attached to the ground with a nail",
    "kanjiStroke": "10",
    "createdAt": null,
    "updatedAt": null,
    "UserId": null
},
{
  "id": 3,
    "kanjiMeaning": "Time",
    "kanjiLook": "時",
    "kanjiStory": "Time is the sun rising over a temple",
    "kanjiStroke": "10",
    "createdAt": null,
    "updatedAt": null,
    "UserId": null
}]

class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      kanji: [],
      shownFlashCard: 0
    }
  }
  //in componentDidMount do call to DB to get kanji info
  //then use the db to update the state. will not use testKanji once connection to db is established
  componentDidMount(){
    this.setState({kanji: testKanji})
  }

  changeCard() {
    this.setState({shownFlashCard: this.state.shownFlashCard++});
  }

  render() {    
    
    // console.log(this.props)
    return (
      <div className="Flashcard">
        Kanji cards
          <Kanji changeCard={this.changeCard} kanjiShown={this.state.kanji[this.state.shownFlashCard]}  />
        </div>
    );
  }
}

export default Flashcard;