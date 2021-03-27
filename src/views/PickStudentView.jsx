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
    <div>
      <h2>Pick Student View</h2>
      <div>
        Pick:
        <label>
          <input type='radio' name='foo' value='1' checked/>
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
