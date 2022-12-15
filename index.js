//esto sirve para renderizar elementos de un array
array.map((element) => {
            return <Producto key={element.id} title={element.name}></Producto>
 })
