import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Index from './pages/index';
import NotFound from './pages/notFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<Index/>}/>
        <Route component={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
