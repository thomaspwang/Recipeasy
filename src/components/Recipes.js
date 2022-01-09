import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none",
  color: 'black',

};

var name= '';


const Recipes = ({data}) => {
  name =  data['title'];

  const [saved, setSaved] = useState(false)

  const saveIconClick = () => {
    //condition checking to change state from true to false and vice versa
    saved ? setSaved(false) : setSaved(true);
  };
  //pull from api?
  return (
    <Card style={{ width: '15.5rem' }}>
      <Link to="/recipe" style={linkStyle}><Card.Img variant="top" src={data['image']} /></Link>
      <Card.Body>
        <Card.Title>
          <Link to="/recipe" style={linkStyle}>
           {name}
          </Link>
          <div className="saveRecipe" style={{ float: 'right' }}>
            {saved ? (
              <img
                style={{ cursor: "pointer" }}
                onClick={saveIconClick}
                src="http://cdn.onlinewebfonts.com/svg/img_107813.png"
                width="15"
                height="15"
                alt="saved recipe"
              />
            ) : (
              <img
                style={{ cursor: "pointer" }}
                onClick={saveIconClick}
                src="https://cdn.onlinewebfonts.com/svg/img_330749.png"
                width="15"
                height="15"
                alt="unsaved recipe"
              />
            )}
          </div>


        </Card.Title>
        <Link to="/recipe" style={linkStyle}><Card.Text>
         
        </Card.Text></Link>
      </Card.Body>
    </Card>
  );
}

export default Recipes;