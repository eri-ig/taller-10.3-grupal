let listadoItems = []

document.addEventListener('DOMContentLoaded', function () {
    let botonLimpiar = document.getElementById('limpiar')
    let botonAgregar = document.getElementById('agregar')
    let inputItem = document.getElementById('item');
    let contenedor = document.getElementById('contenedor')
//cree una funcion para cada elemento del html que necesitaba
    cargarItemsGuardados()
    escucharEventos()

    function escucharEventos() {
        botonLimpiar.addEventListener('click', function () {
            listadoItems = [ ] // se remueve toda info del array
            localStorage.removeItem('items')// se remueve toda info del localstorage
            mostrarItemsEnContainer()
            inputItem.value = ""// se vacia el imput
        })

        botonAgregar.addEventListener('click', function () {
            listadoItems.push(inputItem.value)//se guarda en el array el valor que hay en el imput
            let paraGuardar = JSON.stringify(listadoItems)//se convierte este array en un json
            localStorage.setItem('items', paraGuardar)// se guarda en el localstorage este json bajo la etiqueta de items
            console.log(listadoItems)//para ver si guarda bien el listado
            mostrarItemsEnContainer()
            inputItem.value = ""// se vacia el imput
        })
    }

    function cargarItemsGuardados() {
        let itemsGuardados = localStorage.getItem('items')
        if (itemsGuardados != null) {
            listadoItems = JSON.parse(itemsGuardados)//se convierte en un objeto,en esta ocacion en un array
            mostrarItemsEnContainer()
        }
    }

    function mostrarItemsEnContainer() { //crea un <li> para cada item del array
        contenedor.innerHTML = ""
        for (let item of listadoItems) {
            contenedor.innerHTML += `  
        <li>${item}</li>
        `
        }
    }


});

