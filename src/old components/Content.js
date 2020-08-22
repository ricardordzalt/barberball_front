import React from 'react';

const Content = props => {
  return (
    <div className='text-justify text-light div-content'>{props.children}</div>
  );
};

export default Content;