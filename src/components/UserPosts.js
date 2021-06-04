import React from 'react';

const UserPosts = ({ title, body }) => {
  return (
    <div className='post-card'>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default UserPosts;
