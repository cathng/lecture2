import React from 'react';
import { Post } from '../post';
import './timeline.css'

export const Timeline = (props) => (
  <div className="timeline">
    <div className="timeline__post-container">
      { props.posts.map(post => (
        <div className="timeline__post">
          <Post
            title={post.title}
            date={post.date}

            imageUrl={post.imageUrl}

            owner={post.owner}
            location={post.location}

            excerpt={post.excerpt}
            postUrl={post.postUrl}
            
            likes={post.likes}
            comments={post.comments}
          />
        </div>) )
      }
    </div>
  </div>
);
