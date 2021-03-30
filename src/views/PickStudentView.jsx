import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const PickStudentView = () => {
  const [pickedStudent, setPickedStudent] = useState(students[0]);

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
        <h2 className='is-size-3 has-text-weight-medium	'>Pick a Student</h2>
        <div>
          Pick:
          <label>
            <input type='radio' name='foo' value='1' />
            Randomly
          </label>
          <label>
            <input type='radio' name='foo' value='2' />
            Low Participation
          </label>
        </div>
        <p>{pickedStudent}</p>
        <button className="button is-info is-medium is-outlined" onClick={() => setPickedStudent(getRandomStudent())}>
          Pick Another Student
        </button>
      </main>
      <Link to='/'>
        <button className="button is-success is-large done-button">Done</button>
      </Link>
    </>
  );
};

export default PickStudentView;
