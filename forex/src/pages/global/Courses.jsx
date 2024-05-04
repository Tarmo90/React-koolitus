import React, { useEffect, useState } from 'react';
import '../../css/Courses.css'
import { Link } from 'react-router-dom';

function Courses() {
const [courses, setCourses] = useState([])
 
useEffect(() => {
  fetch(process.env.REACT_APP_COURSES_URL)
  .then(res => res.json())
  .then(data => setCourses(data || []))
})
  return (
    <div>

      <h3 className='courses_title'>Courses</h3>
      <div className='course_text'>"Forex trading is the process of buying and selling currency pairs on the forex market to profit from changes in currency exchange rates. In this course, you will learn the basic concepts and terminology necessary for successful trading in the forex market. The course covers concepts such as currency pairs, supply and demand, technical analysis, fundamental analysis, risk management, and trading psychology."</div>
      <div className='course_cont'>
        {courses.map((course, id) => (
          <div key={course.id}>
            <Link to={'/single_course/' + id}>
              <button className='course_button'>{course.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;


