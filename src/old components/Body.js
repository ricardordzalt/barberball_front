import React from 'react';

const Body = props => {
  return (
    <div class="body">
      {props.children}



    <style jsx>{`
      .body {
        background-color: #EC3237;
      }
    `}
    </style>
    
    </div>
  );
};


export default Body;