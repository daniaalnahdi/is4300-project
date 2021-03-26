import React from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const RaisedHandsView = () => {
  return (
    <div>
      <h2>Raised Hands View</h2>
      <ul>
        {students.map((name, idx) => {
          return <li key={idx}>{name}</li>;
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
