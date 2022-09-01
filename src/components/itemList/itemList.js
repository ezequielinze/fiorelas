import Item from "../item/item"


const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>

            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList