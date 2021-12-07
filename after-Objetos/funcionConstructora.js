function Usuario(nombre, apellido, mascotas, libros) {
  this.name = nombre;
  this.lastName = apellido;
  this.mascotas = mascotas;
  this.books = libros;

  // Metodo
  this.getFullName = function () {
    return `Hola, soy ${this.name} y mi apellido es ${this.lastName}`;
  };

  //   METODO - Me dice el numero de mascotas
  this.getMascotas = function () {
    return `${this.name} tiene ${this.mascotas.length} mascotas`;
  };

  //   METODO - Me agrega nueva mascotas
  this.addMascotas = function (newMascota) {
    this.mascotas.push(newMascota);
  };

  //   METODO - Me lista los libros que tiene
  this.getBooks = function () {
    let bookList = "Lista de Libros\n\n";

    this.books.map((item) => {
      //       console.log(item.Libro);
      bookList += `* ${item.Libro} - ${item.Autor}\n`;
    });
    console.log(typeof bookList);
    return bookList;
  };
}

// Mascotas
const mascotas = ["perro", "gato"];

// Libros --> Esto es un array de Objetos.
let libros = [
  {
    Libro: "The Hitchhiker´s Guide To The Galaxy",
    Autor: "Dooglas Adams",
  },
  {
    Libro: "1984",
    Autor: "George Orwell",
  },
  {
    Libro: "Fahrenheit 451",
    Autor: "Ray Bradbury",
  },
  {
    Libro: "El Alquimista",
    Autor: "Paulo Coelho",
  },
  {
    Libro: "El señor de las Moscas",
    Autor: "William Golding",
  },
  {
    Libro: "Poder sin limites",
    Autor: "Tony Robbins",
  },
  {
    Libro: "El diario de Ana Frank",
    Autor: "Ana Frank",
  },
  {
    Libro: "Cien años de soledad",
    Autor: "Gabriel garcia Marquez",
  },
  {
    Libro: "Crimen y Castigo",
    Autor: "Fiodor Dostoievski",
  },
];

let newUser = new Usuario("Juan", "Huertas", mascotas, libros);

console.log(newUser.getFullName());
console.log(newUser.getMascotas());
console.log(newUser.getBooks());
