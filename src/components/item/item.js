import foto1 from '../../assets/remera_blanca.png'
import '../item/item.scss'

const Item = ({ producto }) => {

    return (
        <div className='card'>
            <section>
                <img className='foto' src={foto1} />
                <h4 className='nombre'>{producto.nombre}</h4>
                <p className='precio'>Precio: {producto.precio}</p>
                <small className='stock'>Stock disponible: {producto.stock}</small>

            </section>

        </div>
    )
}

export default Item