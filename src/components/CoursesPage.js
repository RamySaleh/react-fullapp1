import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import { Link } from 'react-router-dom';
import { getCourses } from '../actions/courseActions';

function CoursesPage(props) {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListner(onChange);
    if (courseStore.getCourses().length === 0) {
      getCourses();
    }
    // whatever you return will be used on unmount (cleaning after)
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={'/course/' + course.id}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/course">
        Add
      </Link>
    </>
  );
}

export default CoursesPage;
