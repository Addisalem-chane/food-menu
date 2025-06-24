import React, { Component } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { menu } from "./assets/data.js";
class App extends Component {
  render() {
    return (
        <div >
          <Header />
          <div className="foods-container">
            {menu.map(function (element, index) {
              return (
                <Menu
                  id={element.id}
                  title={element.title}
                  category={element.category}
                  price={element.price}
                  img={element.img}
                  desc={element.desc}
                />
              );
            })}
          </div>
        </div>
    );
  }
}

export default App;
