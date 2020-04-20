import React, { useEffect, useState } from 'react';
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

const CoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: '',
    slug: '',
    authorId: null,
    category: '',
  });
  useEffect(() => {
    const courseId = props.match.params.id;
    if (courseId) {
      setCourse(courseStore.getCourseById(parseInt(courseId)));
    }
  }, [props.match.params.id]);

  function handleChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      toast.success('course saved');
      props.history.push('/courses');
    });

    function formIsValid() {
      const _errors = {};

      if (!course.title) _errors.title = 'Title is required';
      if (!course.authorId) _errors.authorId = 'Author is required';
      if (!course.category) _errors.category = 'Category is required';

      setErrors(_errors);
      return Object.keys(_errors).length === 0;
    }
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></CourseForm>
    </>
  );
};

export default CoursePage;
