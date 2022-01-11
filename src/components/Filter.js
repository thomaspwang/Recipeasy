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
var allergiesS = [];

function Filter() {
  const [healthList, setHealth] = useState([]);
  const [dietList, setDiet] = useState([]);
  const [allergiesList, setAllergies] = useState([]);
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

    fetch("http://localhost:4000/api/allergies", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin' : 'http://localhost:5000'
      },
      body: JSON.stringify({
        "username" : user,
        "allergies" : allergiesList,
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

  const handleChangeA = (event) => {
    allergiesS = [];
    console.log(`Option selected:`, event);
    for (let i = 0; i < event.length; i++) {
      allergiesS.push(event[i].value);
    }
    setAllergies(allergiesS);
  };

const hypertension = {
  maxSodium: '375',
  minFiber: '10',
  maxCalories:'500', 
  maxAlcohol: '0',
}
const cholesterol = {
  maxSodium: '375',
  maxFat: '19',
  maxSaturatedFat: '3',
  maxCalories:'500', 
  maxAlcohol: '0',
  maxCholesterol:'50',
}
const diabetes = {
  maxSugar: '9',
  maxSaturatedFat: '3',
  maxCholesterol:'50',
}

const obesity = {
  maxSugar: '9',
  maxSaturatedFat: '3',
  minFiber: '10',
  maxAlcohol: '0',
}
  const flu ={
    minVitaminC:'5',
  }

  const depression = {
    minVitaminC:'5',
    minFiber: '10',
  }


  const health = [
    { value: hypertension, label: 'Hypertension' },
    { value: cholesterol, label: 'High Cholesterol' },
    { value: diabetes, label: 'Diabetes' },
    { value: obesity, label: 'Obesity' },
    { value: flu, label: 'Flu' },
    { value: depression, label: 'Depression' },
  ];

  const diet = [
    { value: 'pescetarian', label: 'Pescetarian' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'paleo', label: 'Paleo' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'lacto vegetarian', label: 'Lacto-Vegetarian' },
    { value: 'ovo vegetarian', label: 'Ovo-Vegetarian' },
    { value: 'primal', label: 'Primal' },
    ];

  
  const allergies = [
    { value: 'peanut', label: 'Peanuts' },
    { value: 'shellfish', label: 'Shellfish' },
    { value: 'egg', label: 'Eggs' },
    { value: 'soy', label: 'Soy' },
    { value: 'tree nut', label: 'Tree Nuts' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'gluten', label: 'Gluten' },
    { value: 'sesame', label: 'Sesame' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'sulfite', label: 'Sulfite' },




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
         <h3>Allergies</h3>
        <Select
        isMulti={true}
          options={allergies}
          onChange={handleChangeA}
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