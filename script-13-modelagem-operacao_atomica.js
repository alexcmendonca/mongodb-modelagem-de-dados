// padrão de operação atômica, onde as info que precisam ser atualizadas juntas e centralizadas em um único local
// criando novo banco de dados
use livraria

db.livros.insertOne({
    _id: 1,
    titulo: "MongoDB: Construa novas aplicações com novas tecnologias",
    autor: ["Fernando Boaglio"],
    data_publicacao: ISODate("2015-01-24"),
    paginas: 244,
    linguagem: "Português",
    id_editora: "Casa do código",
    Estoque: 3,
    checkout: [{por: "David", data: ISODate("2022-10-15")}]
})

// consultando documentos na coleção "livros"
db.livros.find({})

// atualizando documento na coleção "livros" buscando pelo id e fazendo incremento negativo no estoque
// incluindo dados da última pessoa que alugou o livro e passando a data atual, que ocorreu o aluguel
db.livros.updateOne(
    {_id: 1, Estoque: {$gt: 0}},
    {
        $inc: {Estoque: -1},
        $push: {checkout: {por: "Danielle", data: new Date() } }
    }
)

// executando busca na coleção livros
db.livros.find({})


