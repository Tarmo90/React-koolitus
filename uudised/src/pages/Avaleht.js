import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Avaleht() {
    const [postitused, uuendaPostitused] =  useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => uuendaPostitused(data))    
    }, []);

    return ( 
        
        <div className="konteiner">
        <div className="avaleht">See on avaleht</div>
        
        <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt=""className="pilt"/>

        {postitused.map(element => 
        
        <div className='avaleht'>
            <div><i>{element.userId}</i> </div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div>

            <Link to={'kasutaja-postitus/' + element.userId}>
            <button>K6ik kasutaja postitused</button>
            </Link>
            <Link to={'vaata-postitus/' + element.userId}>
            <button>Vaata postitust</button>
            </Link>
            </div>
        
        )}

    </div>
     );
}

export default Avaleht ;