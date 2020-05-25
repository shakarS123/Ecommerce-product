import React, { Component } from "react";
import CardboardBoxes from "../Image/CardboardBoxes.jpg";

class Card extends Component {
  
  render() {
    return (
      <div>
        <div className="card">
          <button
            type="button"
            className="btn btn-danger al_sale_button mt-2 ml-2 p-0"
          >
            Sale!
          </button>
          <img src={this.props.image} className="card-img-top border" />
          <div className="card-body ">
            <b className="card-text">{this.props.title}</b>
            <p className="card-text">{"$" + this.props.price + ".00"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
