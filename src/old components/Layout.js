import React from 'react';

const Layout = props => {
  return (
    <div className='text-custom'><h1 className='p-3 mb-2 text-left'>{props.children}</h1></div>
  );
};

export default Layout;