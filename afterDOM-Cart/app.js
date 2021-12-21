const contenedor = document.querySelector("#contenedor");
const tableBody = document.querySelector("#table-contenedor");
const badge = document.querySelector("#badgeCount");

stockProductos.forEach((prod) => {
  const div = document.createElement("div");

  div.className = "card m-2";
  div.style = "width: 18rem;";

  div.innerHTML = `
            
            <img src="https://elceo.com/wp-content/uploads/2020/08/ropa_freepik.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Precio: ${prod.precio} </p>
                <button onclick='agregarAlCarrito(${prod.id})' class="btn btn-primary">Comprar</button>
            </div>
            </div>
  
  `;

  contenedor.appendChild(div);
});

const carrito = [];

// Funcion agregar al carrito
function agregarAlCarrito(prodId) {
  let producto = stockProductos.find((item) => item.id == prodId);
  carrito.push(producto);

  badge.innerHTML = carrito.length;
  console.log(carrito);
  mostrarCompra();
}

// Funcion pintar carrito
const mostrarCompra = () => {
  tableBody.innerHTML = "";

  carrito.forEach((prod) => {
    const tr = document.createElement("tr");
    tr.className = "table-primary";
    tr.innerHTML = `
            <th scope='row'>${prod.id}</th>
            <td >${prod.nombre}</td>
            <td >${prod.precio}</td>
    `;
    tableBody.appendChild(tr);
  });
};
