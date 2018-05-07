import React, { Component } from 'react';
import Flashcard from './Components/Flashcard';
import Registration from './Components/Registration';
import './App.css';

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
        <Registration />
        My app
          <Flashcard 
            flashcard={this.state.kanji}/>
      </div>
    );
  }
}

export default App;
