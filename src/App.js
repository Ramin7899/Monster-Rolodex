// import React from 'react';
import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list_component';
import { SearchBox } from './components/search_box/search_box_component'

import './App.css';





class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
    console.log("wdwd");
    console.log("wdwd");
  }

  render() {

    const { monsters, searchField } = this.state;
    console.log(monsters, searchField);
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex </h1>
        <SearchBox placeholder="search Monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>

        </CardList>

      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <h1>hi this is a test</h1>
//     </div>
//   );
// }

export default App;
