import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
  }

  render() {
    return (
      <div className="App">
        <main>
          <h3>List of items</h3>
          <ul>
            {this.state.items.map(item => (
              <li key={item}>
                <div className="drag">
                  <Hamburger />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
