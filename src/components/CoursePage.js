import React from 'react';

function CoursePage(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.authorId}</h3>
      <h4>{props.category}</h4>
    </div>
  );
}

export default CoursePage;
