
const Datos = ({puntuacion, intentos}) => {
  //variable de estado con el valor de datos para que se actualice en el HTML la puntuación


  return (
    <div>
      <h3>Puntuación: {puntuacion}</h3>
      <h3>Intentos: {intentos}</h3>
    </div>
  )
}

export default Datos
