/**
 * Programación Funcional
 */

//  CLIENTE
var inOut = 'si',
    elegir = '',
    salir = false

let cliente = {
    nombre: 'Pepe',
    edad: 49
}

// Pedido Actual
let pedido = []

// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(`COD - NOMBRE - PRECIO`)
    console.log(`---------------------`)
    CARTA.forEach( plato => {
        console.log(`${plato.cod} - ${plato.nombre}- ${plato.precio}€`)
    })
}

// Enseñar el menu
mostrarMenu()

// PEDIDO


function pedir(inOut) {
    inOut = prompt(`Hola ${cliente.nombre}, Quieres realizar un pedido (si/no) :`).toLocaleLowerCase()
    // Valida si quiere o no realizar un pedido
    validaIntroPedido(inOut)
}


function validaIntroPedido(inOut) {
    console.log('inOut en validaIntroPedido:', inOut);
    switch (inOut) {
        case 'si':
            console.log('Nos vamos a realizar el pedido')
            inicioComanda()
            break
        case 'no':
                console.log('Chao')
                salir = true
                break
        default:
                alert('ERROR.!!! la respuesta es si o no')
                break
    } 
}

function validaCod(elegir) {
    const pedidoDelUsuario = elegir => {
        console.log(CARTA.find( () => elegir === CARTA.cod))
    }
}   

function inicioComanda(elegir) {
    elegir = prompt('Introduce el codigo del plato.Para TOTAL introduzca (t)').toLocaleUpperCase()
    console.log('En inicioComanda(), cod plato :', elegir)
    validaCod(elegir)
}

// Preguntamos si quiere realizar un pedido. si entra en bucle de tomar la comanda
while(inOut = 'si') {
    pedir(inOut)
    console.log('oooooooooo',salir, inOut)
    while(salir = false && elegir != 't') {
        inicioComanda(elegir)
    }
}
