import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAtom} from 'jotai';
import {dataAtom, currUserAtom} from "../atoms.js";


const linkStyle = {
  textDecoration: "none",
  color: 'black',

};

var name= '';
var id = '';


const Recipes = ({data}) => {
  name =  data['title'];
  id = data['id'];
  var url = "/recipe" ///+ id;

  const [saved, setSaved] = useState(false);
  const [recipe, setRecipe] = useAtom(dataAtom);
  const [user, setUser] = useAtom(currUserAtom);

  const isSaved = () => {
    const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;
    
    fetch(endpoint, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(result => result.json())
    .then(savedRecipes => {
      console.log(savedRecipes);

      var isIn = savedRecipes.includes(data['id']);
      console.log(isIn);
      setSaved(isIn);
    })
    
  }

  const saveRecipe = () => {
    //condition checking to change state from true to false and vice versa
    saved ? setSaved(false) : setSaved(true);

    const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;
    console.log(endpoint);

    fetch(endpoint, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(result => result.json())
    .then(savedRecipes => {
      console.log(savedRecipes);

      savedRecipes = savedRecipes.filter(x => {return x !== data['id']});

      savedRecipes.push(data['id']);

      return savedRecipes;
    })
    .then(newRecipes => {
      console.log(newRecipes);
      fetch("http://localhost:4000/api/recipes", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin' : 'http://localhost:5000'
        },
        body: JSON.stringify({
          "username" : user,
          "recipes" : newRecipes
        })
      }).then(response => console.log(response.json()));
    })
  };
  const unsaveRecipe = () => {
    //condition checking to change state from true to false and vice versa
    saved ? setSaved(false) : setSaved(true);

    const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;
    console.log(endpoint);

    fetch(endpoint, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(result => result.json())
    .then(savedRecipes => {
      console.log(savedRecipes);

      savedRecipes = savedRecipes.filter(x => {return x !== data['id']});

      return savedRecipes;
    })
    .then(newRecipes => {
      console.log(newRecipes);
      fetch("http://localhost:4000/api/recipes", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin' : 'http://localhost:5000'
        },
        body: JSON.stringify({
          "username" : user,
          "recipes" : newRecipes
        })
      }).then(response => console.log(response.json()));
    })
  };

  const onLinkClick = () => {
    setRecipe(data);
  }
  //pull from api?
    const endpoint = 'http://localhost:4000/api/recipes?' + `username=${user}`;
    console.log(endpoint);

    fetch(endpoint, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      }
    })
    .then(result => result.json())
    .then(savedRecipes => {
      console.log(savedRecipes);

      savedRecipes = savedRecipes.filter(x => {return x !== data['id']});

      savedRecipes.push(data['id']);

      return savedRecipes;
    })
    
  isSaved();

  return (
    <Card style={{ width: '15.5rem' }}>
      <Link to={url} onClick={onLinkClick} style={linkStyle}><Card.Img variant="top" src={data['image']} /></Link>
      <Card.Body>
        <Card.Title>
          <Link to={url} onClick={onLinkClick} style={linkStyle}>
           {name}
          </Link>
          <div className="saveRecipe" style={{ float: 'right' }}>
            {saved ? (
              <img
                style={{ cursor: "pointer" }}
                onClick={unsaveRecipe}
                src="http://cdn.onlinewebfonts.com/svg/img_107813.png"
                width="15"
                height="15"
                alt="saved recipe"
              />
            ) : (
              <img
                style={{ cursor: "pointer" }}
                onClick={saveRecipe}
                src="https://cdn.onlinewebfonts.com/svg/img_330749.png"
                width="15"
                height="15"
                alt="unsaved recipe"
              />
            )}
          </div>


        </Card.Title>
        <Link to={url} style={linkStyle}><Card.Text>
         
        </Card.Text></Link>
      </Card.Body>
    </Card>
  );
}

export default Recipes;