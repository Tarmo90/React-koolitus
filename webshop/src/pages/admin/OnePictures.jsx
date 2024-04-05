import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OnePicture() {
  const { index } = useParams();
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_PICTURES_URL)
      .then(res => res.json())
      .then(data => {
        const selectedPicture = data[index];
        setPicture(selectedPicture);
      })
  }, [index]);

  return (
    <div>
      <img src={picture.src} alt='' />
      <h4>{picture.alt}</h4>
      <h5>{picture.header}</h5>
      <div>{picture.text}</div> 
    </div>
  );
}

export default OnePicture;
