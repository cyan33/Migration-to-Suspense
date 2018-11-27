import React, { Component } from 'react';
import Album from './Album';

function Albums() {
  return (
    <>
      <Album id={1} />
      <Album id={2} />
      <Album id={3} />
    </>
  ); 
}

export default Albums;
