import React, { Component } from 'react';

class Sections extends Component {
    render() {
        return (
          <>
            <div className="single-food">
              <div
                className="img">
                  <img src={this.props.img} alt="" />
                </div>
                
              <div className="title-price">
                <h3>{this.props.title}</h3>
                <p>{this.props.price}</p>
              </div>
              <div className="food-desc">{this.props.desc}</div>
            </div>
          </>
        );
    }
}

export default Sections;
