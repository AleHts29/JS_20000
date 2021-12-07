class Usuario {
  constructor(nombre, apellido, mascotas, libros) {
    this.name = nombre;
    this.lastName = apellido;
    this.mascotas = mascotas;
    this.books = libros;
  }

  //   METODO
  getFullName() {
    return `Hola, soy ${this.name} ${this.lastName}`;
  }

  getMascotas() {
    return `${this.name} tiene ${this.mascotas.length} mascotas`;
  }

  addMascotas(newMascota) {
    this.mascotas.push(newMascota);
  }

  getBooks() {
    let bookList = "Lista de Libros\n\n";
    this.books.map((item) => {
      bookList += `* ${item.Libro} - ${item.Autor}\n`;
    });
    return bookList;
  }
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

// creo un nuevo usuario a partir de mi funcion constructora (del Molde)
let newUser = new Usuario("Juan", "Dutra", mascotas, libros);

console.log(newUser.getFullName());
newUser.addMascotas("Pajaro");
console.log(newUser.getMascotas());
console.log(newUser.getBooks());
