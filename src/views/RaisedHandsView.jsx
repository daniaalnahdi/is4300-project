import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../assets/loader.gif'
import students from '../data/students';

const RaisedHandsView = () => {
    const [show, setShow] = useState(false);
    
  return (
    <div>
      <h2>Raised Hands View</h2>
      <img src={Loader} style={{width: '50px'}}/>
      <span>Finding new raised hands:</span>
      <ul>
        {students.map((name, idx) => {
          return idx <= 2 && <li key={idx}>{name}</li>;
        })}
      </ul>
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
