import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <Link to='/raised-hands'>
        <button>Raised Hands</button>
      </Link>
      <Link to='/reactions'>
        <button>Reactions</button>
      </Link>
      <Link to='/pick-student'>
        <button>Pick a Student</button>
      </Link>
    </div>
  );
};

export default HomeView;
