import React from 'react';

const Hero = (props: any) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '800px',
        padding: '75px 25px',
        backgroundColor: 'white',
        color: 'white',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>{props.children}</div>
    </div>
  );
};

export default Hero;
