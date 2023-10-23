let productos = '';

axios.get('https://world.openfoodfacts.org/api/v2/product/737628064502.json')
    .then((respuesta)=> {
        // Aquí puedes procesar los datos de la respuesta de Open Food Facts
        // Por ejemplo, puedes acceder a la información que necesitas utilizando respuesta.data

        // Ejemplo: Obtener el nombre del producto
        const nombreProducto = respuesta.data.product.product_name;

        // Ejemplo: Obtener la imagen del producto
        const imagenProducto = respuesta.data.product.image_url;

        // Aquí puedes construir el HTML o realizar otras acciones con los datos obtenidos
        productos += `
            <div>
                <img class="producto" src="${imagenProducto}">
                <h3 class="nombre">${nombreProducto}</h3>
            </div>
        `;

        console.log(productos);
        document.getElementById('contenedor').innerHTML = productos;
    })
    .catch((error)=>{
        console.log(error)
    });
