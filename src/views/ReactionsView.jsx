import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReactionsView = () => {
  const totalStudents = 30;

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [noReactions, setNoReactions] = useState(totalStudents);

  useEffect(() => {
    let timer = setInterval(
      () => setTimeElapsed((prevState) => prevState + 1),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium	has-text-grey'>
          View Reactions
        </h2>
        <div className='box'>
          <p className='has-text-weight-semibold'>
            Reactions during this{' '}
            <span className='has-text-info'>{timeElapsed}</span> second
            period...
          </p>
          <div
            className='has-text-weight-bold mt-3 reactions-list'
            style={{ marginLeft: '16em', marginRight: '16em' }}
          >
            <div className='columns mb-1'>
              <div className='column '>👍</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>👏</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>❤️</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>😂</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>😮</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>🎉</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>✅ </div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
            <div className='columns mb-1'>
              <div className='column '>❌</div>
              <div className='column'>0</div>
              <div className='column has-text-grey'>0%</div>
            </div>
          </div>
          <span className='has-text-weight-medium mt-3 mr-6'>No reactions: {noReactions}</span>
          <span>Total students: {totalStudents}</span>
        </div>
      </main>
      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default ReactionsView;
