import React from "react";
import './recipe.css';
import {useAtom} from 'jotai';
import {dataAtom} from "../atoms.js";
//import Summary from "./summary.js"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Recipe = () => {
  const [recipe] = useAtom(dataAtom);
  var url = "window.location.href=" + recipe['sourceUrl'];

  // const steps = recipe['analyzedInstructions'][0]['steps'];
  // let stepItems = [];
  // for (let i = 0; i < steps.length; i++) {
  //   console.log(steps[i]['ingredients']['step']);
  //   stepItems.push(steps[i]['ingredients']['step']);
  // }
  // console.log(stepItems);
  // const listItems = stepItems.map((d) => <li key={d}>{d}</li>);


  // usedIngredients(array with object of what food), summary
  const btnClick = () => {
    window.open(recipe['sourceUrl']);
  }

  return (
    <div className='all'>
    <div className='fullPage'>
      <h1>
      {recipe["title"]}
      </h1>
      <div>
      <img src={recipe['image']} alt="Recipe Name" />
        <h5><b>Estimated Time:</b> {recipe['readyInMinutes']} minutes</h5>
      </div>
      <div style={{paddingBottom:'10px'}}>{ReactHtmlParser(recipe['summary'])}</div>
      </div>
      <p>
       <div className="padding"><button className="buttonLink" onClick={btnClick}>I want to cook this!</button></div>
      
      </p>
    </div>
  );
};

export default Recipe;