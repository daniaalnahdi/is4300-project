import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import students from '../data/students';

const PickStudentView = () => {
  const getRandomStudent = () => {
    return students[~~(Math.random() * students.length)];
  };

  const [pickedStudent, setPickedStudent] = useState(getRandomStudent());

  return (
    <div>
      <h2>Pick Student View</h2>
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
      <button onClick={() => setPickedStudent(getRandomStudent())}>
        Pick Another Student
      </button>
      <Link to='/'>
        <button>Done</button>
      </Link>
    </div>
  );
};

export default PickStudentView;
