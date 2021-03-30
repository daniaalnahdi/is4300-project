import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../assets/loader.gif';
import students from '../data/students';

const RaisedHandsView = () => {
  //todo: reowork the timer function to set in intervals
  const [show, setShow] = useState(false);
  const delay = 5;

  useEffect(() => {
    let timer = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium'>View Raised Hands </h2>
        <div className='two-col-layout'>
          <div className='two-col-left'>
            <img src={Loader} style={{ width: '50px' }} />
            <span>Finding new raised hands:</span>
            {show && (
              <ul>
                {students.map((name, idx) => {
                  return idx <= 2 && <li key={idx}>{name}</li>;
                })}
              </ul>
            )}
            <p>Raised previously:</p>
            <ul>
              {students.map((name, idx) => {
                return idx > 2 && <li key={idx}>{name}</li>;
              })}
            </ul>
          </div>
          <Link to='/pick-student'>
            <button className="button is-info is-medium pick-student-button">🧑 Pick a Student</button>
          </Link>
        </div>
      </main>

      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default RaisedHandsView;
