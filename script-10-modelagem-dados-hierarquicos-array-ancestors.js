// trabalhando com dados utilizando padrão de estrutura array of ancestors
// ao utilizar o padrão de array de ancestrais, informamos o NÓ, todos os ancestrais e o pai do NÓ.
use modelagem03

// criando coleção chamada "Ancestrais"
db.createCollection('Ancestrais')

// inserindo vários documentos na coleção "Ancestrais" com matriz contendo todos os ancestrais e 
// identificando o pai desse documento
db.Ancestrais.insertMany([
    {_id:"Colaborador01", ancestors:["Gerente Geral", "Gerente", "Supervisor02"], parent: "Supervisor02"},
    {_id:"Colaborador02", ancestors:["Gerente Geral", "Gerente", "Supervisor02"], parent: "Supervisor02"},
    {_id:"Supervisor02", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Supervisor01", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Gerente", ancestors:["Gerente geral"], parent:"Gerente geral"},
    {_id:"Gerente geral", ancestors:[], parent:null}
    ])
    
// realizando consulta filtrando os ancestrais do documento cujo id seja "Supervisor02"
db.Ancestrais.findOne({_id:"Supervisor02"}).ancestors

// realizando a consulta solicitando o pai do id:"Supervisor02"
db.Ancestrais.findOne({_id:"Supervisor02"}).parent