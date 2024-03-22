// trabalhando com dados utilizando estrutura de árvore: materialized paths
use modelagem03

// criando coleção "Materializados"
db.createCollection('Materializados')

// inserindo dados começando pelo topo da árvore, colocando o nome do nó como id e o caminho como path
db.Materializados.insertMany([
    {_id:"Gerente geral", path:null},
    {_id:"Gerente", path:"Gerente geral"},
    {_id:"Supervisor02", path:"Gerente geral, Gerente"},
    {_id:"Supervisor01", path:"Gerente geral, Gerente"},
    {_id:"Colaborador01", path:"Gerente geral, Gerente, Supervisor02"},
    {_id:"Colaborador02", path:"Gerente geral, Gerente, Supervisor02"}
])

// filtrando documento que tem "Gerente geral" como path
db.Materializados.findOne({path:"Gerente geral"})