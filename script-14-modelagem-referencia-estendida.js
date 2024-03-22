// Padrão referência estendida quando duplicamos apenas informações necessárias em duas coleções
// criando novo banco de dados
use vendas

db.clientes.insertOne({
    "_id": 1,
    "Nome": "Melissa Joana Mendes",
    "cpf": "738.424.165-04",
    "Data Nascimento": "13/10/1957",
    "Genero": "Feminino",
    "Empresa": "Alimentos LTDa",
    "Profissao": "Assistente administrativo",
    "Endereco":{
            "Rua": "Travessa João Passos",
            "Numero": 191,
            "Bairro":"Olaria"
        }
})

db.endereco.insertOne({
    "Rua": "Travessa João Passos",
    "Numero": 191,
    "Bairro":"Olaria",
    "Cidade": "Aracaju",
    "Estado":"SE",
    "CEP":"49092-200"
})

// consultando coleção clientes
db.clientes.find({})