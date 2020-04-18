import React from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import CoursePage from './CoursePage';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose="3000" hideProgressBar></ToastContainer>
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
