import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Menyy() {
  const cartSum = useSelector(state => state.cartSum.value)


  return (
    <div>
      <Link to="/">     
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>   
     
     <Link to="/osta-kinkekaart">
      <button className="nupp">Osta kinkekaart</button>
     </Link>

     <Link to="/arikliendile">
      <button className="nupp">2rikliendile</button>
     </Link>

      <Link to='/ostukorv'>
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to='/seaded'>
        <button className='nupp'>Seaded</button>
      </Link>
      <br /><br />

      <Link to="/esindused">
      <button className="nupp">Esindused</button>
     </Link>
     
      <Link to='/hinnad'>
        <button className='nupp'>Hinnad</button>
      </Link>
      <Link to='/tooted'>
        <button className='nupp'>Tooted</button>
      </Link>
      <Link to='/tootajad'>
        <button className='nupp'>Tootajad</button>
      </Link>
      <br /><br />

      <Link to='/halda-tooted'>
        <button className='nupp'>Halda tooteid</button>
      </Link>
      <Link to='/halda-esindused'>
        <button className='nupp'>Halda esindusi</button>
      </Link>
      <Link to='/halda-hinnad'>
        <button className='nupp'>Halda hindu</button>
      </Link>
      <Link to='/halda-tootajad'>
        <button className='nupp'>Halda tootajaid</button>
      </Link>
      <br /><br />

      <Link to='/lisa-hind'>
        <button className='nupp'>Lisa hind</button>
      </Link>
      <Link to='/lisa-esindus'>
        <button className='nupp'>Lisa esindus</button>
      </Link>
      <Link to='/lisa-tootaja'>
        <button className='nupp'>Lisa tootaja</button>
      </Link>
      <Link to='/lisa-toode'>
        <button className='nupp'>Lisa toode</button>
      </Link>

      <span>Ostukorvi summa: {cartSum} $</span>
    </div>
  )
}

export default Menyy