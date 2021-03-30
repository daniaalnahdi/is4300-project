import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <>
      <main>
        <div className='home-buttons-list'>
          <Link to='/raised-hands'>
            <button className='button is-info is-large home-button'>
              ✋ View Raised Hands
            </button>
          </Link>
          <Link to='/reactions'>
            <button className='button is-info is-large home-button'>
              👍 View Reactions
            </button>
          </Link>
          <Link to='/pick-student'>
            <button className='button is-info is-large home-button'>
              🧑 Pick a Student
            </button>
          </Link>
        </div>
      </main>
      <Link to='/'>
        <button
          style={{ visibility: 'hidden' }}
          className='button is-success is-large'
        >
          Done
        </button>
      </Link>
    </>
  );
};

export default HomeView;
