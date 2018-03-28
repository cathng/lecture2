import React from 'react';
import './readmore.css';

export const Readmore = (props) => (
  <div className="readmore">
    <a className="readmore__a" href={props.postUrl}>continue reading ...</a>
  </div>
);
