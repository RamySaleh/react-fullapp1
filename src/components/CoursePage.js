import React, { useEffect, useState } from 'react';
import { getCourseById, saveCourse } from '../api/courseApi';
import CourseForm from './CourseForm';
import { toast } from 'react-toastify';

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
      getCourseById(courseId).then((_course) => setCourse(_course));
    }
  }, [props.match.params.id]);

  function handleChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveCourse(course).then(() => {
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
