import React from 'react'
import '../assets/about.css'
const Tips = (props) => {
  return (
    <div>
        <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.name}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.thoughts}</h5>
          <div className="new-align3">{props.date}</div>
        </div>
      </div>
      <div className="new-align1">amount :</div>
      <div className="card-like-bar">
        <div className="new-align2">
          <b>{"$"}{props.price}</b>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tips