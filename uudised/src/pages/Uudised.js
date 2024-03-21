
import {Link} from 'react-router-dom'

function Uudised() {
 const uudised = JSON.parse(localStorage.getItem('uudised')) || [];

    return ( 
     <div className="konteiner">  
        <div className="uudised-text">
            {uudised.length === 0 && <div> Yhtegi uudist hetkel pole!</div>}
      
            <div>
                {uudised.map((uudis, index) => 
                    <Link className='uudised' to={'/uudis/' + index} key={index}>
                        <div>{uudis}</div>
                    </Link>      
        )}  </div>
        </div>
       
        <img src="https://academy-public.coinmarketcap.com/optimized-uploads/cc566922929e4ffeb919a274b03dee3b.png" 
        alt=""className="uudised-pilt"/>
        
    </div> );
    
}

export default Uudised ;