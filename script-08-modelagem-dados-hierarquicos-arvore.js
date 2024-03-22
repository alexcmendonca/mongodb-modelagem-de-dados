// criando novo banco de dados utilizando dados com estrutura de árvore - padrão de referência pai
use modelagem03

// criando coleção chamada "Pai"
db.createCollection('Pai')

// inserindo todos documentos de uma única vez passando o id com o nome do nó e parent para o pai do nó
db.Pai.insertMany([
    {_id:"Colaborador01" , parent:"Supervisor02"},
    {_id:"Colaborador02" , parent:"Supervisor02"},
    {_id:"Supervisor02", parent:"Gerente"},
    {_id:"Supervisor01", parent:"Gerente"},
    {_id:"Gerente", parent:"Gerente geral"},
    {_id:"Gerente geral", parent: null}
])

// realizando consulta apenas de documento que tenha "Colaborador01", passando o id e recebendo info do seu pai
db.Pai.findOne({_id:"Colaborador01"}).parent