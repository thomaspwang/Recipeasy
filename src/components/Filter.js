import React from 'react';
import "./Filter.css";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';

import {currUserAtom} from "../atoms.js";
import {useAtom} from 'jotai';
export {dietS};


var healthS = [];
var dietS = [];
var ratingS = [];
var timeS = [];

function Filter() {
  const [healthList, setHealth] = useState([]);
  const [dietList, setDiet] = useState([]);
  const [timeList, setTime] = useState([]);
  const [rateList, setRating] = useState([]);
  const [user] = useAtom(currUserAtom);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  //const [healthSelect, setHealth] = useState(" ");

  const saveFilters = () => {

    setShow(false);

    fetch("http://localhost:4000/api/health-problems", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      },
      body: JSON.stringify({
        "username" : user,
        "health_problems" : healthList,
      })
    }).then(response => console.log(response.json()));

    fetch("http://localhost:4000/api/dietary-restrictions", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      },
      body: JSON.stringify({
        "username" : user,
        "dietary_restrictions" : dietList,
      })
    }).then(response => console.log(response.json()));

  }
 

  const handleChangeH = (event) => {
    healthS = [];
    console.log(`Option selected:`, event);
    for (let i = 0; i < event.length; i++) {
      healthS.push(event[i].value);
    }
    console.log(healthS);
    setHealth(healthS);
  };

  const handleChangeD = (event) => {
    dietS = [];
    console.log(`Option selected:`, event);
    for (let i = 0; i < event.length; i++) {
      dietS.push(event[i].value);
    }
    setDiet(dietS);
  };

  const handleChangeR = (event) => {
    ratingS = [];
    console.log(`Option selected:`, event);
    for (let i = 0; i < event.length; i++) {
      ratingS.push(event[i].value);
    }
    setRating(healthS);
  };

  const handleChangeT = (event) => {
    timeS = [];
    console.log(`Option selected:`, event);
    for (let i = 0; i < event.length; i++) {
      timeS.push(event[i].value);
    }
    setTime(healthS);
  };


  const health = [
    { value: 'Health1', label: 'Hypertension' },
    { value: 'Health2', label: 'High Cholesterol' },
    { value: 'Health3', label: 'Diabetes' },
    { value: 'Health4', label: 'Sleep Apnea' },
    { value: 'Health5', label: 'Obesity' },
    { value: 'Health6', label: 'Flu' },
    { value: 'Health7', label: 'Depression' },
  ];
//   var nutritionalParameters = {
//     'Hypertension': "maxSodium: '1000', minFiber: '30', maxCalories: '2000'"
//     'High Cholesterol': "maxSaturatedFat: '50', maxCholesterol: '1000',"
//   }

//    var Health1 = {
//       method: 'GET',
//       url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex',
//       params: {
//         maxSodium: '1000',
//         minFiber: '30', 
//         maxCalories: '2000'
//       }
//     }
  //measurments per day
  //Hypertension(High Blood Pressure): low sodium(max 1500milligrams),
  //                                   high fiber (min 30g)
  //                                   watch calories(max 2000)
  //                                    avoid alchohol
  //High Cholesterol: low fat(max 56-78 grams)
  //                   low saturated fat (max 13 grams)
  //                  low cholesteral (max 200mg)
  //                  low sodium(2300 milligrams max)
  //                  limit alchohl
  //diabetes: low carbs (max 270 grams)
  //           sugar(max36 grams)
  //           low cholesterol(max 200miligrams)
  //           sat fats(max 15 grams)
  //high blood pressure: 
  //          omega 3 fatty acids (min 100mg) 
  //          citrus fruits as an ingredient
  //          low sodium(2300 milligrams max)
  //           0.6-gram potassium
  //Sleep Apnea
  //  melatonin (min 5 mg) 
  //  omega 3 fatty acids (min 100mg)
  //  tryptophan (min 8g)      
  //Obesity
  //  sugar(max36 grams)
  //  whole grains ingredients
  //  high fiber (min 30g)
  //  protein (20g)
  //  limit alchohl
  //Flu
  //  vitamin c (20g) 
  //Depression
  //  vitamin c (20g) 
  //  protein (20g)
  //  high fiber (min 30g)

  const diet = [
    { value: 'pescetarian', label: 'Pescetarian' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'paleo', label: 'Paleo' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'lacto vegetarian', label: 'Lacto-Vegetarian' },
    { value: 'ovo vegetarian', label: 'Ovo-Vegetarian' },
    { value: 'primal', label: 'Primal' },
    ];

    //do cuisine and type of meal(dinner, etc ) instead?
  const time = [
    { value: 'time1', label: 'time1' },
    { value: 'time2', label: 'time2' },
    { value: 'time3', label: 'time3' },
  ];
  const rating = [
    { value: '5', label: '*****' },
    { value: '4', label: '****' },
    { value: '3', label: '***' },
    { value: '2', label: '**' },
    { value: '1', label: '*' },
  ];
  
  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Toicon-icon-lines-and-angles-filter.svg/1024px-Toicon-icon-lines-and-angles-filter.svg.png' className='button' />
      </div>

      <Modal show={show} onHide={saveFilters}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <div className="App" >
        <h3>Health</h3>
        <Select
        isMulti={true}
          options={health}
          onChange={handleChangeH}
          // value={healthSelect}
          
        />
         <h3>Diet</h3>
        <Select

        isMulti={true}
          options={diet}
          onChange={handleChangeD}
        />
         <h3>Time</h3>
        <Select
        isMulti={true}
          options={time}
          onChange={handleChangeT}
        />
         <h3>Rating</h3>
        <Select
        isMulti={true}
          options={rating}
          onChange={handleChangeR}
        />
      </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveFilters}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;