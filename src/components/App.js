import React from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import Header from './common/Header';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      {getPage()}
    </div>
  );
}

function getPage() {
  const route = window.location.pathname;
  if (route === '/about') return <AboutPage />;
  else return <HomePage />;
}
export default App;
