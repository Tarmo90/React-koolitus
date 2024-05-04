import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../css/SingleStrategy.css';

function SingleStrategy() {
  const [strategyData, setStrategyData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_STRATEGIES_URL)
      .then(res => res.json())
      .then(data => {
        const foundStrategy = data.find(strategy => strategy.id === Number(id));
        setStrategyData(foundStrategy);
      });
  }, [id]);

  if (!strategyData) {
    return <div>Laadimine...</div>;
  }

  return (
    <div className='single-strategy'>
      {strategyData.id === 0 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.time_based_liquidity_title}</h2>
              <h4 className='discription_title'>{strategyData.description_title_4}</h4>
              <div className='discription'>{strategyData.time_based_liquidity_description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_5}</h4>
              <div className='discription'>{strategyData.description_4}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_6}</h4>
              <div className='discription'>{strategyData.description_5}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> REVERSAL</p>
                <img src={strategyData.image_3} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> CONTINUATION</p>
                <img src={strategyData.image_4} className='chart_img' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.ltf_structure_title}</h2>
              <h4 className='discription_title'>{strategyData.ltf_structure_title_2}</h4>
              <div className='discription'>{strategyData.ltf_structure_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> LTF STRUCTURE</p>
                <img src={strategyData.ltf_structure_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.opening_prices_title}</h2>
              <h4 className='discription_title'>{strategyData.opening_prices_title_2}</h4>
              <div className='discription'>{strategyData.opening_prices_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'>POWER OF 3</p>
                <img src={strategyData.opening_prices_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.example1_title}</h2>
              <h4 className='discription_title'>{strategyData.example1_title_2}</h4>
              <div className='discription'>{strategyData.example1_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'>INTERNAL OR EXTERNAL</p>
                <img src={strategyData.example1_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.example2_title}</h2>
              <h4 className='discription_title'>{strategyData.example2_title_2}</h4>
              <div className='discription'>{strategyData.example2_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'>DISPLACEMENT OR MANIPULATION</p>
                <img src={strategyData.example2_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.example3_title}</h2>
              <h4 className='discription_title'>{strategyData.example3_title_2}</h4>
              <div className='discription'>{strategyData.example3_description}</div>
              <br /><br />
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'>LTF STRUCTURE</p>
                <img src={strategyData.example3_image} className='structure_image' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}

      {strategyData.id === 1 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {strategyData.id === 2 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}

        {strategyData.id === 3 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {strategyData.id === 4 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {strategyData.id === 5 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {strategyData.id === 6 && (
        <div>
          <h4 className='title'>{strategyData.title}</h4>
          <div className='content'>
            <div className='discription-cont'>
              <h2 className='IRL'>{strategyData.title_2}</h2>
              <h4 className='discription_title'>{strategyData.description_title}</h4>
              <div className='discription'>{strategyData.description}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_2}</h4>
              <div className='discription'>{strategyData.description_2}</div>
              <br /><br />
              <h4 className='discription_title'>{strategyData.description_title_3}</h4>
              <div className='discription'>{strategyData.description_3}</div>
            </div>
            <div className='image-cont'>
              <div className='image-wrapper'>
                <p className='title2'> IRL & ERL</p>
                <img src={strategyData.image} className='chart_img' alt="" />
              </div>
              <div className='image-wrapper'>
                <p className='title3'> ERL & IRL</p>
                <img src={strategyData.image_2} className='chart_img' alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      <Link to={"/strategies"}>
        <button className='strategies_button'>Tagasi</button>
      </Link>
  </div>
    
  );
}

export default SingleStrategy;
