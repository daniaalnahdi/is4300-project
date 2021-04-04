import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from '@material-ui/core';

import students from '../data/students';

const PickStudentView = () => {
  const [pickedStudent, setPickedStudent] = useState(students[0]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [sliderValue, setSliderValue] = useState([0, 50]);

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
              Participation
            </label>
          </div>

          <div
            className='mt-5'
            style={
              selectedOption === 2
                ? { display: 'flex', justifyContent: 'center' }
                : { display: 'none' }
            }
          >
            <div style={{ marginRight: '5em', marginLeft: '5em' }}></div>
            <span className='has-text-weight-medium is-size-5'>
              Low Participation
            </span>
            <Slider
              value={sliderValue}
              onChange={(e, newValue) => {
                setSliderValue(newValue);
                setPickedStudent(getRandomStudent());
              }}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              valueLabelDisplay='off'
            />
            <span className='has-text-weight-medium is-size-5'>
              High Participation
            </span>
            <div style={{ marginRight: '5em', marginLeft: '5em' }}></div>
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
