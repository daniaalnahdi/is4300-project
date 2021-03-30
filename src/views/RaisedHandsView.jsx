import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import students from '../data/students';

const RaisedHandsView = () => {
  //todo: reowork the timer function to set in intervals
  const [showFirst, setShowFirst] = useState(false);
  const firstDelay = 2;

  const [showSecond, setShowSecond] = useState(false);
  const secondDelay = 4;

  useEffect(() => {
    let firstTimer = setTimeout(() => setShowFirst(true), firstDelay * 1000);
    let secondTimer = setTimeout(() => setShowSecond(true), secondDelay * 1000);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium has-text-grey'>
          View Raised Hands
        </h2>
        <div className='box'>
          <div>
            <ClipLoader color={'hsl(204, 86%, 53%)'} loading={true} size={30} />

            <span className='is-size-4 has-text-weight-medium '>
              Waiting for newly raised hands...
            </span>
          </div>

          <div class='select is-normal'>
            <select>
              <option>Sort by...</option>
              <option>Lowest to highest participation</option>
              <option>Highest to lowest participation</option>
              <option>Alphabetical</option>
              <option>Random</option>
            </select>
          </div>
          <ul className='is-size-3'>
            {showFirst &&
              students.map((name, idx) => {
                return idx <= 1 && <li key={idx}>{name}</li>;
              })}
            {showSecond &&
              students.map((name, idx) => {
                return idx > 1 && idx < 4 && <li key={idx}>{name}</li>;
              })}
          </ul>
        </div>
        <p className='has-text-weight-semibold'>Currently Raised Hands</p>
        <p className='has-text-grey'>
          These are persisting raised hands prior to visiting this page.
        </p>
        <ul
          className='is-size-4'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {students.map((name, idx) => {
            return (
              idx > 3 && (
                <li key={idx} style={{}}>
                  {name}
                </li>
              )
            );
          })}
        </ul>
        <hr />
        <span>Still looking for other students?</span>{' '}
        <Link to='/pick-student'>
          <button className='button is-info is-medium'>
            🧑 Go to Pick a Student
          </button>
        </Link>
      </main>

      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default RaisedHandsView;
