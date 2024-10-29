import { useState } from "react"
import '../styles/card.css'
import '../styles/lista.css'


const Card2 = (productos1) => {
    //console.log(productos1.productos[0].title)

    const titulo = productos1.productos[0].title
    const imagen = productos1.productos[0].image
    const descripcion = productos1.productos[0].description
    const precio = productos1.productos[0].price

    const [added, setAdded] = useState(false)

  return (
    <div className="tarjeta">
    <img src = {imagen} alt={titulo} className="tarjeta-imagen"/>
   {
    productos1.productos.map((producto)=>{
       console.log(producto)
    })
   }

    {added
  ?<button type="button" className="botn-quitar">
    Quitar del carrito
  </button>
    :<button type="button" className="botn-agregar">
    Agregar al carrito
  </button>
  }
</div>
  )
}

export default Card2
