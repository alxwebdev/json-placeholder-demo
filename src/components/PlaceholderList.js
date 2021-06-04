import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../layout/Spinner';
import PostCard from './PostCard';
import PostForm from './PostForm';

const PlaceholderList = () => {
  const [posts, setPosts] = useState(null);

  const fetchPost = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(data.data);
  };

  const addPost = async (title, body) => {
    const data = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title,
        body,
      }
    );
    setPosts(old => [data.data, ...old]);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <PostForm addPost={addPost} />
      {posts ? (
        posts.map(post => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PlaceholderList;
