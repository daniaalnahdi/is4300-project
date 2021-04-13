import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const PickStudentView = () => {
  const [pickedStudent, setPickedStudent] = useState(students[0]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [checkedLow, setCheckedLow] = useState(true);
  const [checkedAve, setCheckedAve] = useState(false);
  const [checkedHigh, setCheckedHigh] = useState(false);

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
            <label className='radio mr-4'>
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
              Session Participation
            </label>
            <label className='radio'>
              <input
                type='radio'
                name='foobar'
                checked={selectedOption === 3}
                onChange={() => {
                  setSelectedOption(3);
                  setPickedStudent(getRandomStudent());
                }}
                className='mr-1'
              />
              Cumulative Participation
            </label>
          </div>

          <div
            className='mt-5'
            style={
              selectedOption === 2 || selectedOption == 3
                ? { display: 'flex', justifyContent: 'center' }
                : { display: 'none' }
            }
          >
            <div style={{ marginRight: '5em', marginLeft: '5em' }}>
              <label className='checkbox mr-4'>
                <input
                  type='checkbox'
                  checked={checkedLow}
                  onChange={() => {
                    setCheckedLow((prevState) => !prevState);
                    setPickedStudent(getRandomStudent());
                  }}
                />
                <span className='ml-1'>Low Participation</span>
              </label>
              <label className='checkbox mr-4'>
                <input
                  type='checkbox'
                  checked={checkedAve}
                  onChange={() => {
                    setCheckedAve((prevState) => !prevState);
                    setPickedStudent(getRandomStudent());
                  }}
                />
                <span className='ml-1'>Average Participation</span>
              </label>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={checkedHigh}
                  onChange={() => {
                    setCheckedHigh((prevState) => !prevState);
                    setPickedStudent(getRandomStudent());
                  }}
                />
                <span className='ml-1'>High Participation</span>
              </label>
            </div>
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
