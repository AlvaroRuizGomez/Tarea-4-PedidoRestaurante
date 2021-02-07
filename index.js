/**
 * Programación Funcional
 */

//  CLIENTE
/**
 * Programación Funcional
 */

// ***************** Variables **********************
//  CLIENTE
let inOut = 'si',
    codPlato = 'x',
    codigoOk = true,
    subTotal = 0,
    cantidad = 0

// Pedido Actual
let pedido = []

let cliente = {
    nombre: 'Alvaro',
    edad: 54
}

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
                alert(`Hasta pronto ${cliente.nombre}`)
                break
        default:
                alert('La respuesta puede ser, si o no ..!!')
                break
    } 
}

// ---------------  crea la comanda  ---------------------------
function inicioComanda(codPlato) {
    codPlato = prompt('Introduzca codigo del plato  - ( T )otal   ( S )alir').toLocaleUpperCase()
    // codPlato = validaCod(codPlato, totalPedido)
    validaCod(codPlato)
    return codPlato
}

function validaCod(codPlato) {
    // ----------  validar si existe código plato  ------------------
    const codigoValidado = CARTA.find(x => x.cod === codPlato)

    if (codigoValidado == undefined && codPlato != 'M' && codPlato != 'T' && codPlato != 'S') {
        alert('Este plato no existe o la opción elegida no es correcta')
    } else if(codigoValidado != undefined && codPlato != 'T' && codPlato != 'S') {
                // -----  Escribimos en el Array pedido[]  --------------
                pedido.push(codigoValidado) 
                subTotal = codigoValidado.precio

                // ----   Mostramos la linea de detalle ----------------
                console.log(`║${codigoValidado.cod}        ${codigoValidado.nombre}    ${codigoValidado.precio}          ${subTotal}  ║`)
    } 
    return codPlato
}   

// ---------------  fin de la comanda  ---------------------------


// ********************* Inicio/Lógica **********************************
// Arranque
// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(`COD - NOMBRE - PRECIO`)
    console.log(`---------------------`)
    CARTA.forEach( plato => {
        console.log(`${plato.cod} - ${plato.nombre}- ${plato.precio}€`)
    })
}
mostrarMenu()

// PEDIDO
const totalPedido = () => {
    let total = 0
    for(producto of pedido){ 
        total += parseInt(producto.precio)
    }
    return total
}

while(inOut === 'si') {
    inOut = pedirSiNo(inOut)
    console.log('╔════════════════════════════╗')
    console.log(`║    **  P E D I D O  **     ║`)
    console.log('╠════════════════════════════╣')

    console.log(`║ Cliente :  ${cliente.nombre}          ║`)
    console.log('╠════════════════════════════╩════════════╗')
    console.log('║Codigo    Nombre    Precio(€)  Subtotal€ ║')
    console.log('╠═════════════════════════════════════════╣')
    while(inOut === 'si' && codPlato != 'T' && codPlato != 'S') {
        codPlato = inicioComanda(codPlato)
        if (codPlato === 'T') {
            console.log('╔═════════════════════════════════════════╗')
            console.log(`║ T O T A L ........................  ${totalPedido()}€ ║`)
            console.log('╚═════════════════════════════════════════╝')
            pedido = []
        } else if (codPlato === 'S') {
            console.log('║**********  Pedido Cancelado  ***********║')
            console.log('╚═════════════════════════════════════════╝')

        }
    }
    // inOut = 'si' // Descomentar para que se ejecute infinito
    codPlato = 'x'
}
