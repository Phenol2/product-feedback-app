import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;
