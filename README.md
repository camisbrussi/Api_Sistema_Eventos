<h1 align="center"> Sistema de Eventos (API) </h1>

<p align="center">
 


</p>

API projetada para trabalho de Microserviços realizado para a disciplina de Arquitetura de softwate.

## Tarefa 

A partir dos conceitos de microsserviços, realizar uma implementação com base no tema a seguir. Primeiramente, fazer um mapeamento da solução, em seguida, uma implementação.

## Tema 

Sistema de Eventos Imaginemos um pequeno sistema para gerência de eventos. Os usuários podem acessar o portal, pesquisar por eventos disponíveis e inscrever-se. Após a inscrição, é permitido ao usuário consultar suas inscrições e também cancelar, desde que dentro do período aceitável para cancelamento. Ao comparecer no evento, os atendentes realizam o checkin dos participantes. Um participante não inscrito pode fazer checkin mediante um cadastro básico e rápido na portaria do evento. Os dados completos desse usuário devem ser preenchidos posteriormente por ele no próprio sistema. Após o encerramento do evento é permitido aos usuários emitir seu certificado de participação. Para isso, é fornecida uma interface ao usuário onde são listados todos os eventos que o mesmo participou, permitindo seleção de geração de certificado. Ainda sobre os certificados, esses possuem um código único de autenticação impresso no próprio documento, acompanhado de um endereço para validação digital desse certificado. O sistema envia e-mail a cada atividade que altere dados no sistema de inscrições, sejam elas: inscrição, cancelamento, comparecimento e emissão de certificado.

Principais funções a observar e modularizar

- Cadastro do usuário
- Login
- Inscrição completa
- Consulta de inscrição
- Cancelamento de inscrição
- Registro de presença
- Inscrição rápida
- Emissão de certificado
- Validação do certificado
- Envio de e-mail

Extras:

- Busca por incritos em evento
- Lista de eventos

## Tecnologias
- Javascript
- NodeJS
- Sequelize


## Instalação local
Criar uma database no mysql com o nome de preferência
Baixar o projeto 
Criar um arquivo .env conforme o env-example e alterar os dados conforme sua configuração
abra o terminal na pasta do projeto 
Rodar os comandos 

1. Faça clone do projeto;
2. na pasta de cada projeto
  ```
  npm i 
  npx sequelize db:migrate */8//*0
  npm run dev
  ``` 

Criado por:
- [Camila Sbrussi](https://github.com/camisbrussi/) 

Professor Orientador da disciplina: Fabrício Pretto
