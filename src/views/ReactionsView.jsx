import React from 'react';
import { Link } from 'react-router-dom';

const ReactionsView = () => {
  return (
    <div>
      <h2>Reactions View</h2>
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
      <Link to='/'>
        <button>Done</button>
      </Link>
    </div>
  );
};

export default ReactionsView;
