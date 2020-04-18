import React, { useEffect, useState } from 'react';
import { getCourseById, saveCourse } from '../api/courseApi';
import CourseForm from './CourseForm';
import { Redirect } from 'react-router-dom';

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
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit');
    saveCourse(course).then(() => {
      console.log('saved');
      props.history.push('/courses');
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></CourseForm>
    </>
  );
};

export default CoursePage;
