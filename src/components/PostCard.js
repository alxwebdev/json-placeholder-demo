import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, body, userId }) => {
  return (
    <Link to={`post/${userId}`}>
      <div className='post-card'>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default PostCard;
