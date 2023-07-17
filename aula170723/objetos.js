// Objeto -> Estrutura que representa um objeto do mundo real (Ex. Produto, Pessoa, Profissão)
// Obejto pode ser modelado -> Classe

// Classe -> Planta ou o modelo do objeto
// Instância é o processo de construir o objeto "new Livro()"
// Construtor é a função que gera o objeto físico
// Características -> Atributos/Propriedades, Método/Funções
class Livro {
  titulo;
  paginas;
  autor;
  volume;
  isbn;
  alugar = function(){
    console.log("Alugado!");
  }

  static isLivro(livro){
    let frag = livro.titulo == undefined;
    return !frag;
  }

  constructor(tit, pag, aut, isnb){
    this.titulo = tit;
    this.paginas = pag;
    this.autor = aut;
    this.isnb = isnb;
  }
}

// Para criar a estrutura "física" do objeto pela classe é necessário fazer uma INSTÂNCIA
let arquitetura = new Livro("Arquitetura Limpa", 400, "Gabriel Braga", 1, "978-85-508-0460-6");
console.log(arquitetura);
arquitetura.alugar();

// console.log("OI!");
// console.error("OI!");
// console.warn("OI!");
// console.info("OI!");

let livroTeste = new Livro();
// livroTeste.titulo = "gwsegfa";
console.log(Livro.isLivro(livroTeste));

// Criação rápida de objetos
const objeto = {};
console.log(typeof objeto);