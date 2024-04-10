import React from 'react';
import artikkel from '../data/Artikkel.json';
import ReactMarkdown from 'react-markdown';

function Article() {
  return (
    <div className='article_container'>
      <h1 className='article_title'>{artikkel.title}</h1>
      <div className='intro'>{artikkel.intro}</div>
      <div className='image_container'>
        
        <img className='image' src={artikkel.image.medium} alt='' />
        <div className="image_text">{artikkel.image.title}</div>
      </div>
      
      <div className='article_text'>
        <ReactMarkdown>{artikkel.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Article;
