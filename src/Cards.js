import React from "react";
import { useEffect, useState } from 'react';
import './Cards.css';


export default function Cards (props){
  const [name, updateName] = useState (props.name)

  useEffect (()=>{
    console.log (name)
  })

  function changeName () {
    updateName (name.toLowerCase())
  }

  
 return (
  <div onClick={changeName} className="card">
    <img src={props.background} alt={props.name} className="backg" />
    <img src={props.icon} alt={props.name} className="icon" />
    <div className="card__info">
      <h2>{props.name}</h2>
      <p>Total Quizzes: {props.totalQuizzes}</p>
      <p>Users: {props.users}</p>
      <p>id: {props.id}</p>
    </div>
    
  </div>
 );
}

