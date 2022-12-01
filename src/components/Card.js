import React from 'react'
import './Card.css'
import fox from "../assets/fox.jpg";
import food from "../assets/food.jpg";
import heartFill from "../assets/heart-fill.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.name}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.thoughts}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{props.text}</div>
      <div className="card-like-bar">
      <img className="card-like-icon" src={heartFill} alt="Logo" /><b>5</b> people liked this post
        <div className="like-text">
          <b>{props.money}</b> have been tipped in total
        </div>
      </div>
    </div>
  )
}

export default Card