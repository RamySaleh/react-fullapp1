import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi';
import CoursePage from './CoursePage';

function CoursesPage(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

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
        <tbody>{courses.map(renderRow)}</tbody>
      </table>
    </>
  );
}

function renderRow(course) {
  return (
    <tr key={course.id}>
      <td>
        <a href={'/courses/' + course.id}>{course.title}</a>
      </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  );
}

export default CoursesPage;
