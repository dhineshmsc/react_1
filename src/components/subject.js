import React from 'react';

function Sub() {
  const books = ['tamil', 'english', 'maths', 'science', 'social'];
  
  return (
    <ul>
      {books.map((bookdetails, index) => (
        <li key={index}>{bookdetails}</li>
      ))}
    </ul>
  );
}

export default Sub;
