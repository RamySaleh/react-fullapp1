import React, { useEffect, useState } from 'react';
import { getCourseById } from '../api/courseApi';
import { Prompt } from 'react-router-dom';

const CoursePage = (props) => {
  const [course, setCourse] = useState({});
  useEffect(() => {
    getCourseById(props.match.params.id).then((_course) => setCourse(_course));
  }, []);

  return (
    <div>
      <h2>{course.title}</h2>
      <h3>{course.authorId}</h3>
      <h4>{course.category}</h4>
      {/* <Prompt when={true} message="Where are you going maaan?"></Prompt> */}
    </div>
  );
};

export default CoursePage;
