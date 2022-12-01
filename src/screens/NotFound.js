import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function NotFound() {
  return (
    <div>
    <Particle params={particlesConfig} className="App-particles__container" />
    <div className="App">
      <div className="App-text">
        <h1 className="App-text__title">MY POSTS</h1>
        <h2 className="App-text__body">
          This page shows the history of all posts that i have made
        </h2>
        <Link to="/">Go to home</Link>
        <div className="go">
        <Card name = "Aditya" date="Today" image ="https://cdn.pixabay.com/photo/2014/08/29/03/02/horses-430441_960_720.jpg" thoughts="hi nice to meet you" text ="hi . this is where you can post whatever thoughts that you think are worth putting here" money ="$8" />
        <Card name = "Aditya" date = "Yesterday" image = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"  thoughts = "keep the text short" text = "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you" money = "$5" />
        <Card name = "Aditya"  date = "tuesday" image = "https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg" thoughts = "the text should be effective" text = "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting" money ="$4" />
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default NotFound;
