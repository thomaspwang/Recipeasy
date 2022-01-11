import React from "react";
import './recipe.css';
import {useAtom} from 'jotai';
import {dataAtom} from "../atoms.js";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Summary = () => {
  const [recipe] = useAtom(dataAtom);

  return (
    <div>
      {ReactHtmlParser(recipe['summary'])}
    </div>
  );
}

export default Summary;