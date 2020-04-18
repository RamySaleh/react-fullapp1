import React, { useEffect, useState } from 'react';
import { getCourseById } from '../api/courseApi';
import CourseForm from './CourseForm';
import { Prompt } from 'react-router-dom';

const CoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: '',
    slug: '',
    authorId: null,
    category: '',
  });
  useEffect(() => {
    //getCourseById(props.match.params.id).then((_course) => setCourse(_course));
  }, []);

  function handleChange(event) {
    // { ...course, title: event.target.value };
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onDataChange={handleChange}></CourseForm>
      {/* <Prompt when={true} message="Where are you going maaan?"></Prompt> */}
    </>
  );
};

export default CoursePage;
