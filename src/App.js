import React from 'react';
import logo from './logo.svg';
import WhiteBoard from "./components/WhiteBoard"
import CourseManager from "./components/CourseManager"
import CourseEditor from "./components/CourseEditor"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
        <WhiteBoard/>
    </div>
  );
}

export default App;
