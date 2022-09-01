// llamamos a la funcion de eventos
import { useState } from "react"
import './contador.scss'

const Contador = () => {

    const stock = '5';
    // [contador, evento] = iniciador de contador
    const [iniciador, setiniciador] = useState(0)

    // funcion suma
    const Sumar = () => {
        // evento le decimos que hacer
        if (iniciador < stock) {
            setiniciador(iniciador + 1)
        }
    }
    // funcion resta
    const Restar = () => {
        // condicionamos que no baje de 0
        if (iniciador > 0) {
            setiniciador(iniciador - 1)
        }
    }

    return (
        <div className="contbtn">
            <div>
                <h2 className="btn" >Contador</h2>
                

                <button className="btn" onClick={Restar}>-</button>
                <span className="btn">{iniciador}</span>
                <button className="btn" onClick={Sumar}>+</button>
            </div>


            {/* <p>Último click: {new Date().toLocaleString()}</p>
            <hr />  */}

        </div>
    )
}

export default Contador