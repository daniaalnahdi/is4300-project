import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReactionsView = () => {
  const totalHeartStudents = 2;
  const totalReactionsStudents = 30;
  const totalStudents = totalReactionsStudents + totalHeartStudents + 2;

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [noReactions, setNoReactions] = useState(totalStudents);
  const [thumbsUp, setThumbsUp] = useState(1);

  let thumbsUpPercent = Math.round((thumbsUp / (totalStudents)) * 100);
  let heartsPercent = Math.round((totalHeartStudents / totalStudents) * 100);

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeElapsed((prevState) => prevState + 1);
    }, 1000);

    let reactionsLimit = totalReactionsStudents;
    let reactionsIncrement = 4;

    let updateReactions = setInterval(() => {
      // 5 instances
      reactionsLimit = reactionsLimit - reactionsIncrement;

      if (reactionsLimit > 0) {
        setThumbsUp((prevState) => prevState + reactionsIncrement);
        setNoReactions((prevState) => prevState - reactionsIncrement);
      }
    }, 500);

    let updateHearts = setTimeout(() => {
        setNoReactions((prevState) => prevState - totalHeartStudents);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(updateReactions);
      clearTimeout(updateHearts);
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
            Reactions during this <span>{timeElapsed}</span> second period...
          </p>
          <div
            className='has-text-weight-bold is-size-2 mt-5 mb-5 reactions-list'
            style={{ marginLeft: '10em', marginRight: '10em' }}
          >
            <div className='columns mb-1'>
              <div className='column '>👍</div>
              <div className='column'>{thumbsUp}</div>
              <div className='column has-text-grey'>{thumbsUpPercent}%</div>
            </div>
            {timeElapsed > 1 && (
              <div className='columns mb-1'>
                <div className='column '>❤️</div>
                <div className='column'>{totalHeartStudents}</div>
                <div className='column has-text-grey'>{heartsPercent}%</div>
              </div>
            )}
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
