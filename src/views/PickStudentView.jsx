import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const PickStudentView = () => {
  const [pickedStudent, setPickedStudent] = useState(students[0]);
  const [selectedOption, setSelectedOption] = useState(1);

  const getRandomStudent = () => {
    var randomInteger = ~~(Math.random() * students.length);

    if (students[randomInteger] === pickedStudent) {
      return randomInteger === students.length - 1
        ? students[0]
        : students[randomInteger + 1];
    } else {
      return students[randomInteger];
    }
  };

  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium	has-text-grey'>
          Pick a Student
        </h2>
        <div className='box'>
          <div className='control is-size-5'>
            <span className='has-text-weight-medium mr-3'>Pick:</span>

            <label className='radio mr-4'>
              <input
                type='radio'
                name='foobar'
                checked={selectedOption === 1}
                onChange={() => {
                  setSelectedOption(1);
                  setPickedStudent(getRandomStudent());
                }}
                className='mr-1'
              />
              Randomly
            </label>
            <label className='radio'>
              <input
                type='radio'
                name='foobar'
                checked={selectedOption === 2}
                onChange={() => {
                  setSelectedOption(2);
                  setPickedStudent(getRandomStudent());
                }}
                className='mr-1'
              />
              Low Participation
            </label>
          </div>

          <p className='is-size-2 ' id='picked-student'>
            {pickedStudent}
          </p>
          <button
            className='button is-info is-medium is-outlined'
            onClick={() => setPickedStudent(getRandomStudent())}
          >
            Pick Another Student
          </button>
        </div>
      </main>
      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default PickStudentView;
