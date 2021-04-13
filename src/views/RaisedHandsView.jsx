import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import students from '../data/students';
import studentsSortedLowest from '../data/studentsSortedLowest';
import studentsSortedHighest from '../data/studentsSortedHighest';
import studentsSortedOldest from '../data/studentsSortedOldest';

const RaisedHandsView = () => {
  const [studentsArray, setStudentsArray] = useState(students);

  const [showFirst, setShowFirst] = useState(false);
  const firstDelay = 2;

  const [showLast, setShowSecond] = useState(false);
  const secondDelay = 4;

  const [flashColorShowFirst, setFlashColorShowFirst] = useState(true);
  const [flashColorShowLast, setFlashColorShowLast] = useState(true);

  useEffect(() => {
    let firstTimer = setTimeout(() => setShowFirst(true), firstDelay * 1000);
    let firstFlashTimer = setTimeout(
      () => setFlashColorShowFirst(false),
      firstDelay * 1000 + 500
    );

    let secondTimer = setTimeout(() => setShowSecond(true), secondDelay * 1000);
    let secondFlashTimer = setTimeout(
      () => setFlashColorShowLast(false),
      secondDelay * 1000 + 500
    );
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(firstFlashTimer);
      clearTimeout(secondTimer);
      clearTimeout(secondFlashTimer);
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
      case 'oldest':
        setStudentsArray(studentsSortedOldest);
        break;
      default:
        setStudentsArray(students);
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

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className='has-text-weight-medium mr-3'>Sort By:</span>
            <div className='select is-normal mt-4'>
              <select
                onChange={(e) => sortStudentsArray(e.currentTarget.value)}
              >
                <option value={'newest'}>Newest to Oldest</option>
                <option value={'oldest'}>Oldest to Newest</option>
                <option value={'lowest'}>Low to High Participation</option>
                <option value={'highest'}>High to Low Participation</option>
              </select>
            </div>
          </div>
          {
            <ul className='is-size-3 mt-5'>
              {studentsArray.map((student, idx) => {
                if (student === 'Johnny McDonald') {
                  return (
                    showLast && (
                      <li key={idx}>
                        <span
                          className={flashColorShowLast ? 'has-text-link' : ''}
                        >
                          {student}
                        </span>{' '}
                        <span className='is-size-6 has-text-weight-semibold has-text-grey'>
                          (few seconds ago)
                        </span>
                      </li>
                    )
                  );
                } else if (
                  student === 'Jane Fuller' ||
                  student === 'Carolyn Armstrong'
                ) {
                  return (
                    showFirst && (
                      <li key={idx}>
                        <span
                          className={flashColorShowFirst ? 'has-text-link' : ''}
                        >
                          {student}
                        </span>{' '}
                        <span className='is-size-6 has-text-weight-semibold has-text-grey'>
                          (few seconds ago)
                        </span>
                      </li>
                    )
                  );
                } else if (
                  student === 'Albert Rios' ||
                  student === 'Bryan Campbell'
                ) {
                  return (
                    <li key={idx}>
                      <span>{student}</span>{' '}
                      <span className='is-size-6 has-text-weight-semibold has-text-grey'>
                        (2 minutes ago)
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          }
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className='mr-4'>Is no one volunteering?</span>{' '}
          <Link to='/pick-student'>
            <button className='button is-info is-medium'>
              🧑 Go to Pick a Student
            </button>
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
