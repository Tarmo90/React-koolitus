import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../css/SingleCourse.css'
function SingleCourse() {
  const [dbCourses, setDbCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_COURSES_URL)
      .then(res => res.json())
      .then(data => {
        setDbCourses(data || []);
      });
  }, []);

  const found = dbCourses.find(course => course.id === Number(id));

  return (
    <div>
      <div className='course_container'>
      {!dbCourses.length ? (
        <div></div>
      ) : found ? (
        <div >
          <h4 className='course_title'>{found.title}</h4>
          <ul className='course_description'>
            {found.description.map((sentence, id) => (
              <div key={id}>{sentence}</div>
            ))}
          </ul>
          <img src={found.image} alt='' />
        </div>
      ) : (
        <div>Kursust ei leitud.</div>
      )}
      </div>
       <Link to={"/courses"}>
        <button className='courses_button'>Tagasi</button>
      </Link>
    </div>
  );
}

export default SingleCourse;
