import React from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const RaisedHandsView = () => {
  return (
    <div>
      <h2>Raised Hands View</h2>
      <p>Raised Recently:</p>
      <ul>
        {students.map((name, idx) => {
          return idx <= 2 && <li key={idx}>{name}</li>;
        })}
      </ul>
      <p>Other:</p>
      <ul>
        {students.map((name, idx) => {
          return idx > 2 && <li key={idx}>{name}</li>;
        })}
      </ul>
      <Link to='/'>
        <Link to='/pick-student'>
          <button>Pick Random Student</button>
        </Link>
        <button>Done</button>
      </Link>
    </div>
  );
};

export default RaisedHandsView;
