import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../css/SingleStrategy.css';

function SingleStrategy() {
  const [dbStrategies, setDbStrategies] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_STRATEGIES_URL)
      .then(res => res.json())
      .then(data => {
        setDbStrategies(data || []);
      });
  }, []);

  const found = dbStrategies.find(strategy => strategy.id === Number(id));

  return (
    <div>
      {!dbStrategies.length ? (
        <div>Laadimine...</div>
      ) : found ? (
        <>
          <h4 className='title'>{found.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{found.title_2}</h2>
              <h4 className='discription_title'>{found.description_title}</h4>
              <div className='discription'>{found.description}</div>
              <br /><br />
              <h4 className='discription_title'>{found.description_title_2}</h4>
              <div className='discription'>{found.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{found.description_title_3}</h4>
              <div className='discription'>{found.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={found.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={found.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{found.time_based_liquidity_title}</h2>
              <h4 className='discription_title'>{found.description_title_4}</h4>
              <div className='discription'>{found.time_based_liquidity_description}</div>
              <br /><br />
              <h4 className='discription_title'>{found.description_title_5}</h4>
              <div className='discription'>{found.description_4}</div>
              <br /><br />
              <h4 className='discription_title'>{found.description_title_6}</h4>
              <div className='discription'>{found.description_5}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> REVERSAL</p>
                <img src={found.image_3} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> CONTINUATION</p>
                <img src={found.image_4} className='chart_img' alt="" />
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{found.ltf_structure_title}</h2>
              <h4 className='discription_title'>{found.ltf_structure_title_2}</h4>
              <div className='discription'>{found.ltf_structure_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> LTF STRUCTURE</p>
                <img src={found.ltf_structure_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>

          <div className='content_price'>
            <div className='discription-cont'>
              <h2 className='IRL'>{found.opening_prices_title}</h2>
              <h4 className='discription_title'>{found.opening_prices_title_2}</h4>
              <div className='discription'>{found.ltf_structure_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'>POWER OF 3</p>
                <img src={found.opening_prices_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Strateegiat ei leitud</div>
      )}
    </div>
  );
}

export default SingleStrategy;
