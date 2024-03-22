# MongoDB: Validando dados

## 💡Objetivos
O objetivo deste repositório é fornecer recursos e orientações sobre o uso eficaz do MongoDB, um banco de dados NoSQL amplamente utilizado na indústria de desenvolvimento de software. Atividades exploradas:

* Transações ACID no MongoDB: Explorando transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade dos seus dados.

* Estruturas de Dados: Trabalhando com diferentes estruturas de dados suportadas pelo MongoDB e utilizando efetivamente para armazenar e recuperar informações.

* Relacionamentos no MongoDB: O MongoDB trabalha com relacionamentos entre documentos e modelando esses relacionamentos para atender às necessidades do seu projeto.

* Estrutura de Árvore: Aprofundando na estrutura de árvore e implementando usando as capacidades flexíveis do MongoDB.

* Utilização de Modelos Existentes: Aproveite os modelos de dados existentes para acelerar o desenvolvimento de novos projetos, adaptando-os conforme necessário para atender aos requisitos específicos do seu aplicativo.

###### Imagem 1: MongoDB é um banco de dados NoSQL baseado em documentos
<img src="/img/mongodb.png">


## 🖥️Desafios do Projeto
Além da técnica de validação de esquema fornecida pelo MongoDB, este projeto está focado em aprimorar a eficiência das consultas, identificando e corrigindo possíveis gargalos de desempenho. Isso inclui a análise e otimização da estruturação dos campos nas coleções, identificação de dados desnecessários que são retornados em todas as consultas e aprimoramento da referência entre documentos.

Com objetivo de não apenas garantir a consistência dos dados, mas também tornar as operações de consulta mais eficientes, minimizando a lentidão e melhorando a experiência do usuário final. Para isso, foi aplicado novos conceitos de modelagem de dados e explorando estratégias avançadas de indexação e referenciação entre documentos.

###### Imagem 2: MongoDB no Visual Studio Code
<img src="/img/mongodb-visual-studio-code.png">


## 📄Conhecimentos Desenvolvidos
|Atividades|Realizadas |
|----------|-----------|
| A importância de modelar um projeto de banco de dados | Transações ACID. |
| MongoDB trabalhando com transações ACID. | Estrutura de dados incorporados e referências. |
| Documentos utilizando a estrutura de dados incorporados. | Documentos utilizando as referências manuais e DBRefs. |
| Utilizando variáveis para armazenar o objectID e referenciar documentos. | MongoDB no Visual Studio Code. |
| Relacionamentos em banco de dados: relacionais e não relacionais. | Padrão de operações atômicas. |
| Criar documentos com relacionamento do tipo: | um para um documentos incorporados |
| um para muitos documentos incorporados; e | um para muitos referências de documentos. |
| Conhecer a estrutura de árvore. | Aplicação do padrão de controle de versão de esquema. |
| Padrões de: | referência pai para criar documentos;
| referência filho; | array de ancestrais; |
| caminhos materializados. | Padrão de conjuntos aninhados. |
| Estuando padrão referência estendida. | |

##  🗂️Organização dos Arquivos

1. script-01-modelagem-documentos-incorporados.js: Este script aborda a modelagem de documentos incorporados no MongoDB, explorando como organizar e estruturar dados relacionados dentro de um único documento.
2. script-02-modelagem-referencias-manuais.js: Aborda o conceito de referências manuais no MongoDB, onde os documentos se referem uns aos outros por meio de identificadores únicos, permitindo relações entre eles.
3. script-03-modelagem-dbrefs.mongodb: Explora o uso de DBRefs (Database References) no MongoDB para criar relacionamentos entre documentos de diferentes coleções, fornecendo uma maneira padronizada de referenciar documentos.
4. script-04-modelagem-estrutura-referencia.mongodb: Este script trata da modelagem da estrutura de referência no MongoDB, onde documentos em uma coleção referem-se a documentos em outra coleção por meio de identificadores únicos.
5. script-05-modelagem-estrutura-referencia.mongodb: Continuação do tópico anterior, abordando mais aspectos da modelagem da estrutura de referência no MongoDB.
6. script-06-modelagem-relacionamento.js: Explora a modelagem de relacionamentos no MongoDB, discutindo diferentes abordagens para lidar com relacionamentos entre documentos.
7. script-07-modelagem-relacionamento.js: Continuação do tópico anterior, abordando mais aspectos da modelagem de relacionamentos no MongoDB.
8. script-08-modelagem-dados-hierarquicos-arvore.js: Este script foca na modelagem de dados hierárquicos em forma de árvore no MongoDB, discutindo estratégias para representar e consultar dados hierárquicos.
9. script-09-modelagem-dados-hierarquicos-child.js: Continuação do tópico anterior, abordando mais aspectos da modelagem de dados hierárquicos em forma de árvore, com ênfase na manipulação de filhos.
10. script-10-modelagem-dados-hierarquicos-array-ancestors.js: Aborda a modelagem de dados hierárquicos em forma de árvore usando arrays de ancestrais para representar a hierarquia entre documentos.
11. script-11-modelagem-dados-hierarquicos-array-materialized.js: Explora a modelagem de dados hierárquicos em forma de árvore usando arrays materializados para armazenar caminhos entre documentos.
12. script-12-modelagem-controle-versao.js: Este script trata da modelagem de controle de versão no MongoDB, discutindo estratégias para controlar e gerenciar versões de documentos.
13. script-13-modelagem-operacao_atomica.js: Aborda o conceito de operações atômicas no MongoDB, explorando como garantir a consistência e integridade dos dados durante operações complexas.
14. script-14-modelagem-referencia-estendida.js: Explora a modelagem de referência estendida no MongoDB, discutindo estratégias para estender referências entre documentos para suportar casos de uso mais complexos.

###### Imagem 3: Estrutura para armazenar dados hierárquicos no padrão de árvore
<img src="/img/estrutura-arvore-bd.jpeg">

###### Imagem 4: Ferramenta NoSQLBooster
<img src="/img/nosqlbooster.png">

## 🔍Referências
- [Alura](https://www.alura.com.br/)