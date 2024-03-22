// trabalhando com relacionamento um-para-um incorporados
// fazendo conexão com banco de dados que utiliza estrutura de dados incorporados
use modelagem

// inserindo documento que possui 2 sub-documentos
// relacionamento um-para-um incorporado
db.clientes.insertOne({
    "_id": 4,
    "Nome": "Juliana Eloá Brito",
    "CPF": "208.862.381-70",
    "Data_Nascimento": "26/06/1991",
    "Genero": "Feminino",
    "Profissao": "Trabalhador de serviços de limpeza",
    "Endereco": {
        "Rua": "Euza D'Aparecida Roriz dos Anjos",
        "Numero": 617,
        "Bairro": "Setor Leste",
        "Cidade": "Luziânia",
        "Estado": "GO",
        "CEP": "72803-590"},
    "Contas": {
        "Numero_Conta": "0189393-9",
        "Agência": "5575",
        "Tipo": "Conta salário",
        "CPF": "208.862.381-70",
        "Valor": 5.242},
    "Status_Civil": "Solteiro(a)"})
    
// trabalhando com relacionamento um-para-muitos incorporados
// primeira etapa de trabalho mudando tipo de relacionamento de um-para-um para um-para-muitos
// é alterar validação do esquema, substituindo tipo de dado object para array
db.runCommand({collMod:'clientes',
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
                    bsonType: "array",
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

// inserindo documento na coleção "clientes" com dois endereços utilizando array
db.clientes.insertOne({
    "_id": 5,
    "Nome": "Luan Caio da Silva",
    "CPF": "520.233.763-94",
    "Data_Nascimento": "14/10/1949",
    "Genero": "Masculino",
    "Profissao": "Atendente de farmácia",
    "Endereco": [{
        "Rua": "João Alberto",
        "Numero": 224,
        "Bairro": "Santa Clara",
        "Cidade": "São Luís",
        "Estado": "MA",
        "CEP": "65058-623"
        },
        {
        "Rua": "Rua das Camelias",
        "Numero": 333,
        "Bairro": "Santa Tereza",
        "Cidade": "São Luís",
        "Estado": "MA",
        "CEP": "65058-623"
        }],
    "Contas": {
        "Numero_Conta": "67314-4",
        "Agência": "5575",
        "Tipo": "Conta poupança",
        "CPF": "520.233.763-94",
        "Valor": 2.860
        },
    "Status_Civil": "Viúvo(a)"
})

// buscando todos os registros presentes na coleção "clientes"
db.clientes.find({})