import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import students from '../data/students';
import studentsSortedLowest from '../data/studentsSortedLowest';
import studentsSortedHighest from '../data/studentsSortedHighest';
import studentsSortedAlpha from '../data/studentsSortedAlpha';
import studentsSortedRandom from '../data/studentsSortedRandom';

const RaisedHandsView = () => {
  const [studentsArray, setStudentsArray] = useState(students);

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

  const sortStudentsArray = (sort) => {
    switch (sort) {
      case 'lowest':
        setStudentsArray(studentsSortedLowest);
        break;
      case 'highest':
        setStudentsArray(studentsSortedHighest);
        break;
      case 'alpha':
        setStudentsArray(studentsSortedAlpha);
        break;
      case 'random':
        setStudentsArray(studentsSortedRandom);
        break;
      default:
        setStudentsArray((prevState) => prevState);
    }
  };
  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium has-text-grey'>
          View Raised Hands
        </h2>
        <div className='box'>
          <div>
            <span className='mr-3'>
              <ClipLoader
                color={'hsl(204, 86%, 53%)'}
                loading={true}
                size={30}
              />
            </span>
            <span className='is-size-4 has-text-weight-medium'>
              Waiting for newly raised hands...
            </span>
          </div>

          <div className='select is-normal mt-4'>
            <select onChange={(e) => sortStudentsArray(e.currentTarget.value)}>
              <option value={'default'}>Sort by...</option>
              <option value={'lowest'}>Lowest to highest participation</option>
              <option value={'highest'}>Highest to lowest participation</option>
              <option value={'alpha'}>Alphabetical</option>
              <option value={'random'}>Random</option>
            </select>
          </div>
          <ul className='is-size-3 mt-5'>
            {showFirst &&
              studentsArray.map((name, idx) => {
                return idx <= 1 && <li key={idx}>{name}</li>;
              })}
            {showSecond &&
              studentsArray.map((name, idx) => {
                return idx > 1 && idx < 3 && <li key={idx}>{name}</li>;
              })}
          </ul>
        </div>
        <p className='has-text-weight-semibold'>Currently Raised Hands</p>
        <p className='has-text-grey'>
          These are persisting raised hands prior to visiting this page.
        </p>
        <ul
          className='is-size-4 mt-3'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {students.map((name, idx) => {
            return (
              idx > 2 &&
              idx < 5 && (
                <li key={idx} className='mr-6'>
                  {name}
                </li>
              )
            );
          })}
        </ul>
        <hr />
        <span className='mr-4'>Is no one volunteering?</span>{' '}
        <Link to='/pick-student'>
          <button className='button is-info is-default'>
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
