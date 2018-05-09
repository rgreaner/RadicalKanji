import React, { Component } from 'react';
import Kanji from './Kanji'
import API from "../utils/API";

// const testKanji = [{
//     "id": 1,
//     "meaning": "Day",
//     "kanjiLook": "日",
//     "kanjiStory": "Pictograph of a sun...with a giant sunspot",
//     "kanjiStroke": "10",
//     "createdAt": null,
//     "updatedAt": null,
//     "UserId": null
  
// },
// {
//   "id": 2,
//     "meaning": "Temple",
//     "kanjiLook": "寺",
//     "kanjiStory": "temple is attached to the ground with a nail",
//     "kanjiStroke": "10",
//     "createdAt": null,
//     "updatedAt": null,
//     "UserId": null
// },
// {
//   "id": 3,
//     "meaning": "Time",
//     "kanjiLook": "時",
//     "kanjiStory": "Time is the sun rising over a temple",
//     "kanjiStroke": "10",
//     "createdAt": null,
//     "updatedAt": null,
//     "UserId": null
// }]

class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      kanji: []
    }
  }
  //in componentDidMount do call to DB to get kanji info
  //then use the db to update the state. will not use testKanji once connection to db is established
  componentDidMount(){
    
    this.loadKanji();
    console.log("heah",API.getKanjis)
  };

  
loadKanji = () => {
  API.getKanjis()
  .then (res =>
    this.setState({kanji:API.getKanjis })
  )

};
  render() {
    let kanjiList = this.state.kanji.map((indivKanji, index) => {
            //console.log(indivKanji);
            return (
                <Kanji key={index} kanji={indivKanji} />
            )
        })
    
    
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