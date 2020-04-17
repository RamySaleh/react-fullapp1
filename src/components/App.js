import React from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import CoursePage from './CoursePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/courses" component={CoursesPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
    </div>
  );
}

export default App;
