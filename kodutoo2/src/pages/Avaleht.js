import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logimine({ onLogin }) {
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();

      const kasutajanimi = kasutajaNimiRef.current.value;
      const parool = paroolRef.current.value;

      // Siselogimise loogika
      if (parool === '123') {
          onLogin(kasutajanimi);
          toast.success("Oled sisse logitud!");
      } else {
          toast.error("Vale parool!");
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>Kasutajanimi</label><br />
              <input ref={kasutajaNimiRef} type="text" /> <br />

              <label>Parool</label> <br />
              <input ref={paroolRef} type="password" />
          </div>
          <button type="submit">Logi sisse</button>
      </form>
  );
}

function Avaleht() {
  const [sisseLogitud, muudaSisseLogitud] = useState(false);
  const [kasutajaNimi, setKasutajaNimi] = useState('');

  const handleLogin = (kasutajanimi) => {
      setKasutajaNimi(kasutajanimi);
      muudaSisseLogitud(true);
  };

  const handleLogout = () => {
      setKasutajaNimi('');
      muudaSisseLogitud(false);
      toast.success("Oled välja logitud!");
  };

  return (
      <div className='App'>
          {sisseLogitud ? (
              <div>
                  <p>Tere tulemast, {kasutajaNimi}!</p>
                  <button onClick={handleLogout}>Logi välja</button>
              </div>
          ) : (
              <Logimine onLogin={handleLogin} />
          )}

          <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  );
}

export default Avaleht;
