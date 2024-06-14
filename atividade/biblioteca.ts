import { MaterialLeitura } from "./materialLeitura";

class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(tituloLivro:string, autorLivro:string, numeroPagina:number) {
        this.titulo = tituloLivro;
        this.autor = autorLivro;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhe():void {
        console.log(`
            Detalhes do livro:
            Título: ${this.titulo},
            Autor: ${this.autor},
            Número total de páginas: ${this.numeroPagina}
        `);
    }
}

class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(tituloRevista:string, autorRevista:string, edicaoRevista:number) {
        this.titulo = tituloRevista;
        this.autor = autorRevista;
        this.edicao = edicaoRevista;
    }

    exibirDetalhe():void {
        console.log(`
            Detalhes da revista:
            Título: ${this.titulo},
            Autor: ${this.autor},
            Edição da revista: ${this.edicao}
        `);
    }
}

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo:string, autor:string, dataPublicacao:Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe():void {
        const data = new Intl.DateTimeFormat("pt-BR").format(this.dataPublicacao);

        console.log(`
            Detalhes do artigo:
            Título: ${this.titulo},
            Autor: ${this.autor},
            Edição da revista: ${data}
        `);
    }
}

const livro = new Livro("Quarto de Despejo", "Carolina Maria de Jesus", 200);
const revista = new Revista("Nacional Geographic", "John Doe", 150);
const artigo = new Artigo("Inteligência Artificial", "Jane Smith", new Date(2021,11,1));

livro.exibirDetalhe();
revista.exibirDetalhe();
artigo.exibirDetalhe();