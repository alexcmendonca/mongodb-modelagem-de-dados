// trabalhando com dados em estrutura de árvore - padrão de referência filho
use modelagem03

// criando coleção chamada "Filho"
db.createCollection('Filho')

// inserindo todos documentos de uma única vez passando o id com o nome do nó e children para array dos filhos
db.Filho.insertMany([
    {_id:"Colaborador01", children: []},
    {_id:"Colaborador02", children: []},
    {_id:"Supervisor01", children: []},
    {_id:"Supervisor02", children: ["Colaborador01", "Colaborador02"]},
    {_id:"Gerente", children: ["Supervisor01", "Supervisor02"]},
    {_id:"Gerente Geral", children: ["Gerente"]}
    ])
    
// realizando filtro para carregar todos os filhos do documento que tenha "Gerente" de id
db.Filho.findOne({_id:"Gerente"}).children