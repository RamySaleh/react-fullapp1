import React from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import CoursePage from './CoursePage';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/course/:id" component={CoursePage}></Route>
        <Route path="/course/" component={CoursePage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
