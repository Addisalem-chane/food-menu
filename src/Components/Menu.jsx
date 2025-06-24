import React, { Component } from "react";
import Menu from "./Menu";
import { menu } from "../assets/data.js"; 
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map((item) => (
          <Link
            key={item.id}
            to={`/food/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Menu
              id={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              img={item.img}
              desc={item.desc}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Menu;
