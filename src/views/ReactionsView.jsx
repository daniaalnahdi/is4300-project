import React from 'react';
import { Link } from 'react-router-dom';

const ReactionsView = () => {
  return (
    <>
      <main>
        <h2 className='is-size-3 has-text-weight-medium	has-text-grey'>
          View Reactions
        </h2>
        <ul>
          <li>👍 0 0%</li>
          <li>👏 0 0%</li>
          <li>❤️ 0 0%</li>
          <li>😂 0 0%</li>
          <li>😮 0 0%</li>
          <li>🎉 0 0%</li>
          <li>✅ 0 0%</li>
          <li>❌ 0 0%</li>
          <li>No Reactions: 0</li>
        </ul>
        <p>Total students: 0</p>
      </main>
      <Link to='/'>
        <button className='button is-success is-large done-button'>Done</button>
      </Link>
    </>
  );
};

export default ReactionsView;
