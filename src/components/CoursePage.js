import React, { useEffect, useState } from 'react';
import { saveCourse } from '../api/courseApi';
import CourseForm from './CourseForm';
import { toast } from 'react-toastify';

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
      toast.success('course saved');
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
