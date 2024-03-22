// criando novo banco de dados
use modelagem

// criando coleção "clientes"
db.createCollection("clientes",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["Nome", "CPF","Status_Civil","Data_Nascimento","Endereco", "Genero", "Profissao", "Contas"],
            properties:{
                Nome:{
                bsonType: "string",
                maxLength:150,
                description: "informe corretamente o nome do cliente"
                },
                CPF:{
                bsonType: "string",
                minLength:14,
                maxLength:14,
                description: "informe corretamente o cpf do cliente" 
                },
                Status_Civil:{
                bsonType: "string",
                enum:["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                description: "informe corretamente o status civil do cliente" 
                },
                Data_Nascimento:{
                bsonType: ["string", "null"],
                description: "informe corretamente a data de nascimento do cliente"  
                },
                Endereco:{
                    bsonType: "object",
                    required:["Rua","Numero","Bairro","Cidade","Estado","CEP"],
                    properties:{
                        Rua:{
                            bsonType: "string"},
                        Numero:{
                            bsonType: "int"},    
                        Bairro:{
                            bsonType: "string"},  
                        Cidade:{
                            bsonType: "string"}, 
                        Estado:{
                            bsonType: "string"},    
                        CEP:{
                            bsonType: "string"} 
                    }
                },
                Genero:{
                bsonType: "string",
                description: "informe corretamente o genero do cliente" 
                },
                Profissao:{
                bsonType: "string",
                description: "informe corretamente o profissão do cliente"},
                Contas:{
                    bsonType:"object",
                    required:["Numero_Conta", "Tipo", "CPF", "Valor","Agência"],
                    properties:{
                        Numero_Conta:{
                            bsonType: "string"  
                        },
                        Tipo:{
                            bsonType: "string",
                            enum:["Conta corrente", "Conta poupança", "Conta salário"]  
                        },
                        CPF:{
                            bsonType: "string",
                            minLength:14,
                            maxLength:14 
                        },
                        Valor:{
                            bsonType: "double"  
                        },
                        Agência:{
                            bsonType: "string"     
                        }
                    }
                }
            }     
        }

    }
})

// inserindo documento na coleção "clientes"
db.clientes.insertOne({
    "_id":1,
    "Nome": "Cauê Luan da Paz",
    "CPF": "426.239.760-23",
    "Data_Nascimento": "16/02/1967",
    "Genero": "Masculino", 
    "Profissao": "Vendedor em comércio atacadista", 
    "Endereco": {
        "Rua":"Vinte e Quatro", 
        "Numero": 121, 
        "Bairro": "Três Vendas", 
        "Cidade":"Pelotas", 
        "Estado":"RS", 
        "CEP": "96071-380"},
    "Contas":{
        "Numero_Conta": "0265177-7", 
        "Agência": "5575", 
        "Tipo": "Conta salário", 
        "CPF": "426.239.760-23", 
        "Valor": 1.411
 },
    "Status_Civil": "Casado(a)"
 })
 
// inserindo novo documento na coleção "clientes"
 db.clientes.insertOne( {
    "_id":2,
    "Nome": "Allana Esther Lara Monteiro",
    "CPF": "207.588.703-96", 
    "Data_Nascimento": "15/03/1962",
    "Genero": "Feminino", 
    "Profissao": "Servente de obras",
    "Endereco": {
        "Rua":"Deputado João Moura Santos", 
        "Numero": 155, 
        "Bairro": "Matadouro", 
        "Cidade":"Teresina", 
        "Estado":"PI", 
        "CEP": "64004-340"}, 
    "Contas":{
        "Numero_Conta": "04938-1",
        "Agência": "5575", 
        "Tipo": "Conta salário",
        "CPF": "207.588.703-96", 
        "Valor": 3.080
 },
    "Status_Civil": "Divorciado(a)"}
)
// buscando todos os registros presentes na coleção "clientes" para avaliar estrutura dos dados armazenados
db.clientes.find({})

// inserindo novo documento na coleção "clientes"
db.clientes.insertOne( {
    "_id":3,
    "Nome": "Emanuelly Raquel Peixoto", 
    "CPF": "587.179.508-05", 
    "Data_Nascimento": "24/05/1966", 
    "Genero": "Feminino", 
    "Profissao": "Gerente de loja",
    "Endereco": {
        "Rua": "São Bento Abade",
        "Numero": 833, 
        "Bairro":"Jardim Marilena", 
        "Cidade": "Guarulhos", 
        "Estado":"SP", 
        "CEP":"07140-450"}, 
    "Contas":{
        "Numero_Conta": "1786128-P", 
        "Agência": "5575", 
        "Tipo": "Conta salário", 
        "CPF": "587.179.508-05", 
        "Valor": 3.041 },
    "Status_Civil": "Viúvo(a)"})