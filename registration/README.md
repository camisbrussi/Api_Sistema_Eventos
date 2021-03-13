![2](https://user-images.githubusercontent.com/40186019/100289107-ea540580-2f56-11eb-876a-270babef1568.png)


API projetada para trabalho de Microserviços realizado para a disciplina de Arquitetura de softwate. 

Tarefa: A partir dos conceitos de microsserviços, vamos realizar uma implementação com base no tema
a seguir. Primeiramente, faremos um mapeamento da solução, em seguida, uma implementação.

Tema: Sistema de Eventos
Imaginemos um pequeno sistema para gerência de eventos. Os usuários podem acessar o portal, pesquisar
por eventos disponíveis e inscrever-se. Após a inscrição, é permitido ao usuário consultar suas inscrições
e também cancelar, desde que dentro do período aceitável para cancelamento.
Ao comparecer no evento, os atendentes realizam o checkin dos participantes. Um participante não
inscrito pode fazer checkin mediante um cadastro básico e rápido na portaria do evento. Os dados
completos desse usuário devem ser preenchidos posteriormente por ele no próprio sistema.
Após o encerramento do evento é permitido aos usuários emitir seu certificado de participação. Para isso,
é fornecida uma interface ao usuário onde são listados todos os eventos que o mesmo participou,
permitindo seleção de geração de certificado. Ainda sobre os certificados, esses possuem um código
único de autenticação impresso no próprio documento, acompanhado de um endereço para validação
digital desse certificado.
O sistema envia e-mail a cada atividade que altere dados no sistema de inscrições, sejam elas: inscrição,
cancelamento, comparecimento e emissão de certificado.

Principais funções a observar e modularizar
1. Cadastro do usuário camisbrussi/API_Customer_Node
2. Login camisbrussi/API_Customer_Node

3. Inscrição completa - camisbrussi/API_Registration_Node
4. Consulta de inscrição - camisbrussi/API_registrationQuery_Node
5. Cancelamento de inscrição - camisbrussi/API_RegistrationCancel_Node
6. Registro de presença - camisbrussi/API_Checkin_Node
7. Inscrição rápida - camisbrussi/API_Checkin_Node

8. Emissão de certificado camisbrussi/API_certificate_generate_Node
9. Validação do certificado camisbrussi/API_certificate_check_Node
10. Envio de e-mail camisbrussi/API_SendMail_Node

Extras:

- Busca por incritos em evento: camisbrussi/API_EventsQuery_Node
- Lista de eventos: camisbrussi/API_Events_Node
