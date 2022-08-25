import React from 'react';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import './App.css';



function App() {

  const [courses, updateCourses] = useState ([]);

  const API_URL = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"

  function getCoursesApi () {
    return new Promise ((resolve, reject) => {
      fetch (API_URL)
      .then ((response)=> response.json())
      .then ((data)=>{
        resolve (data.communityCategories)
      })
    })
  }

  async function getCourses () {
    const courses = await getCoursesApi ();
    updateCourses (courses);
  }

  useEffect (()=>{
    getCourses();
  },[]);



  return (
    <div className="App">
      <header className='App-header'>
        {
          courses.map (course => {
            return <Cards
            name={course.name}
            totalQuizzes={course.totalQuizzes}
            users={course.users}
            icon={course.icon}
            background={course.background}
            id={course.id}
            />
          })
        }
      </header>
    </div>
  );
}

export default App;
