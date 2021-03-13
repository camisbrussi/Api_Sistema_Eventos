Para iniciar o projeto


Instalar no servidor
------------------------
NODE

sudo apt install curl -y
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt install nodejs -y
-------------------------
PM2

sudo npm i -g pm2
pm2 start /home/foreb/agenda/server.js --name agenda
pm2 list
pm2 startup
-------------------------
NGINX

sudo apt install nginx

------------------------


acessar a pasta do projeto e rodar
npm i

-----
 criar um arquivo .env com as seguintes informações

comando nano .env


DATABASE=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=

TOKEN_SECRET=asddsfdgdfgdsfASsxasamvjsad64541c587fc8s5
TOKEN_EXPIRATION=7d

APP_URL=177.44.248.87
APP_PORT=3000

-------

configurando o nginx

sudo nano /etc/nginx/sites-enabled/users
pegar arquivo nginx-HTTP, copiar e colar no editor

sudo systemctl restart nginx

---------------------------------------------

para iniciar a aplicação 
pm2 startup caminho até o projeto + dist/server.js --name=nomedoprojeto

rodar o comando que apareceu no terminal

se quiser parar
pm2 stop nomedoprojeto
listar todos os projetos
pm2 list
