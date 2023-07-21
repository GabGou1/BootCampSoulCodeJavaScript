export class Livro {
  id;
  titulo;
  autor;
  anoP;
  genero;

  constructor(id, titulo, autor, anoP, genero){
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anoP = anoP;
    this.genero = genero;
  }
}

export const vetorDeLivros = [
  {
    id: 1,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoP: 1605,
    genero: "Romance"
  },
  {
    id: 2,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    anoP: 1997,
    genero: "Fantasia"
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    anoP: 1949,
    genero: "Distopia"
  },
  {
    id: 4,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    anoP: 1954,
    genero: "Fantasia"
  },
  {
    id: 5,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    anoP: 1813,
    genero: "Romance"
  }
];