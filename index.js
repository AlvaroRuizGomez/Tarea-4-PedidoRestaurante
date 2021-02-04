/**
 * Programación Funcional
 */

//  CLIENTE
/**
 * Programación Funcional
 */

//  CLIENTE
let inOut = 'si',
    codPlato = 'x',
    codigoOk = true,
    totalPedido = 0

// Pedido Actual
let pedido = []

let cliente = {
    nombre: 'Alvaro',
    edad: 54
}


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

// **************** Funciones **********************

function pedirSiNo(inOut) {
    inOut = prompt(`Hola ${cliente.nombre}, Quieres realizar un pedido (si/no) :`).toLocaleLowerCase()
    // Valida si quiere o no realizar un pedido
    validaIntroPedido(inOut)
    return inOut
}

function validaIntroPedido(inOut) {
    switch (inOut) {
        case 'si':
                break
        case 'no':
                console.log('Chao')
                alert(`Hasta pronto ${cliente.nombre}`)
                break
        default:
                alert('La respuesta puede ser, si o no ..!!')
                break
    } 
}

// ---------------  crea la comanda  ---------------------------
function inicioComanda(codPlato) {
    codPlato = prompt('Introduzca codigo del plato  -  ( M )odifica  ( T )otal   ( S )alir').toLocaleUpperCase()
    codPlato = validaCod(codPlato)
    return codPlato
}

function validaCod(codPlato) {
    const codigoValidado = CARTA.find(x => x.cod === codPlato)

    if (codigoValidado == undefined && codPlato != 'M' && codPlato != 'T' && codPlato != 'S') {
        alert('Este plato no existe o la opción elegida no es correcta')
    } else if(codigoValidado != undefined && codPlato != 'M' && codPlato != 'T' && codPlato != 'S') {
                // -----  Escribin¡mos en Array pedido[]  --------------
                pedido.push(codigoValidado) 
                let precioNum = parseInt(codigoValidado.precio)
                // ----   Sumamos el plato al total del pedido  --------
                totalPedido = totalPedido + precioNum 
                console.log(codigoValidado.cod, '   ', codigoValidado.nombre, '   ',codigoValidado.precio, '   ', totalPedido)
    } 
    return codPlato
}   

// ---------------  fin de la comanda  ---------------------------

// ---------------  Totaliza el pedido  --------------------------
function MostrarTotal(totalPedido) {
    console.log('Total a pagar :', totalPedido)
    console.log('**********************')
    totalPedido = 0
    return totalPedido
}

// ---------------  Fin Totaliza el pedido  ----------------------

// ---------------  Modifica el pedido  --------------------------
function modificaPedido() {
    console.log('En modifica pedido')
}
// ---------------  Fin Modifica el pedido  ----------------------


// ********************* Lógica **********************************
while(inOut === 'si') {
    inOut = pedirSiNo(inOut)
    console.log('Cliente : ', cliente.nombre)
    console.log('Codigo   Nombre    Precio     TOTAL')
    console.log('===================================')
    while(inOut === 'si' && codPlato != 'M' && codPlato != 'T' && codPlato != 'S') {
        
        codPlato = inicioComanda(codPlato)
        if (codPlato === 'T') {
            totalPedido = MostrarTotal(totalPedido)
            pedido = []
        } else if (codPlato === 'M')
            modificaPedido()
    }
    inOut = 'si'
    codPlato = 'x'
}
