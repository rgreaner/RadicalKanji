import React, { Component } from 'react';
import './App.css';
import Flashcard from './Components/Flashcard';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      kanji: [
        
      ]
    }
  }

  componentWillMount(){
    this.setState({kanji: [{
      title: "day",
      number: 1
    },
    {
      title: "temple",
      number: 2
    },
    {
      title: "time",
      number: 3
    }]
  })
  }

  render() {
    return (
      <div className="App">
        My app
          <Flashcard 
            flashcard={this.state.kanji}/>
      </div>
    );
  }
}

export default App;
