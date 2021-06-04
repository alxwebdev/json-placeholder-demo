import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserPosts from './UserPosts';

const Post = props => {
  const [userPosts, setUserPosts] = useState(null);

  const fetchSinglePost = async () => {
    const { postId } = props.match.params;
    const POST_URL = `https://jsonplaceholder.typicode.com/posts?userId=${postId}`;
    const postRes = await axios.get(POST_URL);
    setUserPosts(postRes.data);
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div>
      {userPosts
        ? userPosts.map(post => {
            return (
              <UserPosts key={post.id} title={post.title} body={post.body} />
            );
          })
        : 'loading...'}
    </div>
  );
};

export default Post;
