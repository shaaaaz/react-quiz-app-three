import React from 'react';
import './App.css';
import HomeComponent from './component/HomeComponent'
import QuizComponent from './component/QuizComponent'
import ResultComponent from './component/ResultComponent'
import { Link,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/quiz' element={<QuizComponent />} />
        <Route path='/result' element={<ResultComponent />} />
      </Routes>
    </div>
  );
}

export default App;