
const contenedorProductos = document.getElementById('contProd');
const contenedorCarrito = document.getElementById('prodCarrito');
const buttonVaciar = document.getElementById('buttonVaciar');
const totalProd = document.getElementById('totalProd');
const totalUs = document.getElementById('totalUs');
const totalArs = document.getElementById('totalArs');

let carrito = [];


stockRelojes.forEach((prod) => {
    const divProd = document.createElement('div');
    let precioArs = prod.precio * 490;;
    divProd.classList.add('contProdR');
    divProd.innerHTML = `
        <img class="img-prod" src="${prod.imagen}" alt="${prod.marca}-${prod.modelo}" title="${prod.marca}-${prod.modelo}">
        <div class="priceCont">
            <div class="prodDet">
                <h4>${prod.marca}</h4>
                <h2>${prod.modelo}</h2>
                <p>Precio: U$${prod.precio}</p>
                <p>Precio: AR$${precioArs}</p>
            </div>
            <div class="contMG">
                <img src="./assets/icons/meGusta.png" alt="icono me gusta" title="icono me gusta">
            </div>
        </div>
        <button id="add${prod.id}" class="addCarrito">Añadir al Carrito</button>
    `
    contenedorProductos.appendChild(divProd);

    const buttonCarrito = document.getElementById(`add${prod.id}`);

    buttonCarrito.addEventListener("click" , ()=> {
        addCarrito(prod.id)
    })
});

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})


// const carritoVacio = () => {
//     if (carrito.length === 0){
//         const divCarrito = document.createElement('div');
//         divCarrito.classList.add('contRecom');
//         divCarrito.innerHTML = `
//             <p> Carrito Vacio </p>
//         `
//         contenedorCarrito.appendChild(divCarrito);
//     } else {
//         addCarrito();
//     }
// }

const addCarrito = (prodId) => {
    
    const repeat = carrito.some (prod => prod.id === prodId)
    
    if (repeat){
        const prod = carrito.map(prod =>{
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }else {
        const itemCarrito = stockRelojes.find((prod) => prod.id === prodId );
        carrito.push(itemCarrito);
    }
    actualizarCarrito();
}
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML= "";

    carrito.forEach((prod) =>{
        const divCarrito = document.createElement('div');
        divCarrito.classList.add('contRecom');
        let precioArs = prod.precio * 490;;
        divCarrito.innerHTML = `
                <div class="imgCont">
                    <img class="img-prod" src="./assets/img/destacado-${prod.id}.PNG" alt="Tag Heuer Formula 1" title="Tag Heuer Formula 1">
                </div>
                <div class="detCont">
                    <h3> ${prod.marca} ${prod.modelo} </h3>
                    <h4> PRECIO: u$:${prod.precio} / Ar$ ${precioArs}</h4>
                    <div>
                        <button>-</button>
                        <p>${prod.id}</p>
                        <button onclick="plusProd(${prod.id})">+</button>
                    </div>  
                    <button onclick="deteleCarrito(${prod.id})">Eliminar</button>
                </div>
        `
        contenedorCarrito.appendChild(divCarrito);

    })

    localStorage.setItem('carrito', JSON.stringify(carrito))

    totalProd.innerText = carrito.reduce((acc, prod) => acc + (prod.cantidad), 0)
    
    totalUs.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0)
    totalArs.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad*490), 0)

}
const deteleCarrito = (prodId) => {
    const itemCarrito = stockRelojes.find((prod) => prod.id === prodId );
    const indice = carrito.indexOf(itemCarrito)
    carrito.splice(indice, 1);
    actualizarCarrito();
}
const vaciarCarrito = ()=>{
    buttonVaciar.addEventListener("click" , ()=> {
        carrito= [];
        actualizarCarrito();

    })
}
vaciarCarrito();


