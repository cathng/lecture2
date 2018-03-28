import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Readmore } from '../readmore';
import { Comment } from './comment.js';

export const Post = (props) => (
  <div className="post">

    <div className="post__header">
      <div className="post__title"><h3>{props.title}</h3></div>
      <div className="post__date">{props.date}</div>
    </div>

    <img className="post__img" src={props.imageUrl} alt='post'/>

    <div className="post__owner">
      <div className="post__avatar">
        <Avatar avatarUrl={props.owner.avatarUrl} />
      </div>
      <div className="post__owner-info">
        <div><b>{props.owner.name}</b></div>
        <div>{props.location}</div>
      </div>
    </div>

    <div className="post__body">
      <div className="post__excerpt">{props.excerpt}</div>
      <Readmore postUrl={props.postUrl} />
      <div className="post__likes"><b>{props.likes} likes</b></div>
      { props.comments.map(comment => <Comment owner={comment.owner} text={comment.text} />) }
      <hr className="post__body-separator" />
      <input placeholder="Add a comment..." className="post__comment-input"/>
    </div>

  </div>
);
