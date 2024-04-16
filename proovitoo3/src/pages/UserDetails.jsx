import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/Tabel.json';
import ReactMarkdown from 'react-markdown';
import '../css/UserDetails.css';

function UserDetails() {
  const { index } = useParams();
  const find = Object.values(data.list);

  return (
    <div className='userDetail_container'>
      <h1 className='userArticle_title'>{find[index].title}</h1>
      <div className='userIntro'>{find[index].intro}</div>
      <div className='userImage_container'>
        <img className='userImage' src={find[index].image.medium} alt="" />
        <div className="userImage_text">{find[index].image.title}</div>
      </div>
      <div className='userArticle_text'>
      <ReactMarkdown>{find[index].body}</ReactMarkdown>
      </div>
      <div className='tags'>
      {find[index].tags.join(' ')}
      </div>
    </div>
  );
}

export default UserDetails;
