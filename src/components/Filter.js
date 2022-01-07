import React from 'react';
import "./Filter.css";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';

var healthS = [];
var dietS = [];
var ratingS = [];
var timeS = [];

function Filter() {
  const [healthList, setHealth] = useState([]);
  const [dietList, setDiet] = useState([]);
  const [timeList, setTime] = useState([]);
  const [rateList, setRating] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //const [healthSelect, setHealth] = useState(" ");
 

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
    { value: 'Health1', label: 'Health1' },
    { value: 'Health2', label: 'Health2' },
    { value: 'Health3', label: 'Health3' },
  ];

  const diet = [
    { value: 'Diet1', label: 'Diet1' },
    { value: 'Diet2', label: 'Diet1' },
    { value: 'Diet3', label: 'Diet3' },
  ];

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

      <Modal show={show} onHide={handleClose}>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;