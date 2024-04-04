import React from 'react';
import artikkel from '../data/Artikkel.json';
import ReactMarkdown from 'react-markdown';

function Article() {
  return (
    <div className='article-container'>
      <h1 className='article-title'>{artikkel.title}</h1>
      <div className='intro'>{artikkel.intro}</div>
      <div className='image-container'>
        
        <img className='image' src={artikkel.image.medium} alt='' />
        <div className="image-text">{artikkel.image.title}</div>
      </div>
      
      <div className='article-text'>
        <ReactMarkdown>{artikkel.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Article;
