import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../assets/loader.gif'
import students from '../data/students';

const RaisedHandsView = () => {
    //todo: reowork the timer function to set in intervals
    const [show, setShow] = useState(false);
    const delay = 5; 

    useEffect(
        () => {
          let timer = setTimeout(() => setShow(true), delay * 1000);
          return () => {
            clearTimeout(timer);
          };
        },
        []
      );

  return (
    <div>
      <h2>Raised Hands View</h2>
      <img src={Loader} style={{width: '50px'}}/>
      <span>Finding new raised hands:</span>
      {show && <ul>
        {students.map((name, idx) => {
          return idx <= 2 && <li key={idx}>{name}</li>;
        })}
      </ul>}
      <p>Raised previously:</p>
      <ul>
        {students.map((name, idx) => {
          return idx > 2 && <li key={idx}>{name}</li>;
        })}
      </ul>
      <Link to='/pick-student'>
        <button>Pick Random Student</button>
      </Link>
      <Link to='/'>
        <button>Done</button>
      </Link>
    </div>
  );
};

export default RaisedHandsView;
