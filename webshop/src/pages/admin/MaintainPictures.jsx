import { TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Button as BButton, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MaintainPictures() {
  const [pictures, setPictures] = useState([]);
  const altRef = useRef();
  const headerRef = useRef();
  const srcRef = useRef();
  const textRef = useRef();

  useEffect(() => {
      fetch(process.env.REACT_APP_PICTURES_URL)
      .then(res => res.json())
      .then(data => setPictures(data || []))
  }, []);

  const add = () => {
    const newPicture = {
      'src': srcRef.current.value,
      'alt': altRef.current.value,
      'header': headerRef.current.value,
      'text': textRef.current.value,
      
    };
   
      pictures.push(newPicture)
      setPictures(pictures.slice())
      fetch(process.env.REACT_APP_PICTURES_URL, {'method': 'PUT', 'body': JSON.stringify(pictures)})
  }
  
  const remove = (index) => {
      pictures.splice(index, 1)
      setPictures(pictures.slice())
      fetch(process.env.REACT_APP_PICTURES_URL, {'method': 'PUT', 'body': JSON.stringify(pictures)})
  }
  
  return (
    <div>
      <TextField label='src' inputRef={srcRef}/>
      <TextField label='alt' inputRef={altRef}/>
      <TextField label='header' inputRef={headerRef}/>
      <TextField label='text' inputRef={textRef}/>
      <Button variant='dark' onClick={add}>Sisesta</Button>
      
      {pictures.map((newPicture, index) =>
        <div key={index}>
          <span>{newPicture.src}; </span><br />
          <span>{newPicture.alt}; </span>
          <span>{newPicture.header}; </span>
          <span>{newPicture.text}; </span><br />
          <BButton variant='danger' onClick={() => remove(index)}>Kustuta</BButton>

          <Link to={'/picture/' + index}>
          <BButton variant='info'>Vaata l2hemalt</BButton><br /><br />
          </Link>
        </div>
      )}
    </div>
  )
}

export default MaintainPictures