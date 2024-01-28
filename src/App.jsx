import './App.css';
import Datos from './Components/Datos/Datos';
import Cards from './Components/Cards/Cards';
import { useState } from 'react';


function App() {

  const [puntuacion, setPuntuacion] = useState(0);
  const [intentos, setIntentos] = useState(0);
  
  const sumarPunt = () => {
    setPuntuacion(puntuacion + 1);
  }
  const sumarInt = () => {
    setIntentos(intentos + 1);
  }

  return (
   <>
    <div className='main-wrapper'>
      <h1>MEMO</h1>
      <Cards sumarPuntuacion={sumarPunt} sumarIntentos={sumarInt}></Cards>
      <Datos puntuacion={puntuacion} intentos={intentos}></Datos>
    </div>


   </>
  );
}

export default App;
