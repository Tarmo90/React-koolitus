import React, {useState}from 'react'
import Tutvustus from '../components/Tutvustus'
import Myyk from '../components/Myyk'
import Garantii from '../components/Garantii';

//peab algama ja lõppema ühesama div-ga
function Arikliendile() {
  const [leht, muudaLeht] = useState("tutvustus");
  return (
    <div>
      <p>Olen ärikliendi lehel</p>
      <button onClick={() => muudaLeht("tutvustus")}>Vaata tutvustust</button>
      <button onClick={() => muudaLeht("myyk")}>Vaata müügi tingimusi</button>
      <button onClick={() => muudaLeht("tgarantii")}>Vaata garantii tingimusi</button>
      { leht === "tutvustus" && <Tutvustus />}
      { leht === "myyk" && <Myyk />}
      { leht === "garantii" && <Garantii />}
      
    </div>
  )
}

export default Arikliendile