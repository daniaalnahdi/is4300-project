import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReactionsView = () => {
  const totalStudents = 30;

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [noReactions, setNoReactions] = useState(totalStudents);
  const [thumbsUp, setThumbsUp] = useState(1);

  let thumbsUpPercent = Math.round((thumbsUp / totalStudents) * 100);

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeElapsed((prevState) => prevState + 1);
    }, 1000);

    let reactionsLimit = 25;
    let reactionsIncrement = 4;

    let updateReactions = setInterval(() => {
      // 5 instances
      reactionsLimit = reactionsLimit - reactionsIncrement;

      if (reactionsLimit > 0) {
        setThumbsUp((prevState) => prevState + reactionsIncrement);
        setNoReactions((prevState) => prevState - reactionsIncrement);
      }
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(updateReactions);
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
              <div className='column'>{thumbsUp}</div>
              <div className='column has-text-grey'>{thumbsUpPercent}%</div>
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
          <span className='mt-3 mr-6'>Total students: {totalStudents + 1}</span>
          <span className='has-text-weight-medium mt-3 mr-6'>
            Students without reactions: {noReactions}
          </span>
        </div>
      </main>
      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default ReactionsView;
