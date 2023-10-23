document.addEventListener("DOMContentLoaded", function() {
    // Obtener los valores de los campos del formulario
    var urlParams = new URLSearchParams(window.location.search);
    var nombreCompleto = urlParams.get("nombre_completo");
    var empresa = urlParams.get("empresa");
    var direccion = urlParams.get("direccion");
    var variedadCafe = urlParams.get("variedad_de_cafe");
    var cantidad = urlParams.get("cantidad");
    var cupon = urlParams.get("cupon") ? "Sí" : "No";

    // Actualizar los elementos en la página de confirmación con los datos del formulario
    document.getElementById("nombre_completo").textContent = nombreCompleto;
    document.getElementById("empresa").textContent = empresa;
    document.getElementById("direccion").textContent = direccion;
    document.getElementById("variedad_de_cafe").textContent = variedadCafe;
    document.getElementById("cantidad").textContent = cantidad;
    document.getElementById("cupon").textContent = cupon;

    // Agregar un evento al botón "Volver" para regresar al formulario
    document.getElementById("volver").addEventListener("click", function() {
        window.history.back();
    });
});
