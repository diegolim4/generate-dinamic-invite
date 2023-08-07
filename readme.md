## Generate dinamic invite

- Esta API permite a geração de convites dinâmicos com códigos QR para eventos. Ela utiliza o Node.js com TypeScript e salva os dados dos convidados em um banco de dados PostgreSQL usando o ORM Prisma. Além disso, utiliza as bibliotecas Qrcode para a geração dos códigos QR e Jimp para adicionar texto às imagens.

## Funcionalidades

- Geração de convites com códigos QR dinâmicos.
- Armazenamento seguro dos dados dos convidados no banco de dados PostgreSQL.
- Personalização dos convites com informações específicas.

## Instalação
- git clone git@github.com:diegolim4/generate-dinamic-invite.git

- npm install

## Crie um arquivo .env na raiz do projeto com as seguintes informações:
- PORT = 4545 
- DATABASE_URL = "postgres://postgres:sua_senha@localhost:5432/sua_tabela"

## Uso
npm run dev

## Rotas
- POST: url/api/insert_invited
- GET (all): url/api/get_all_invited
- GET (one):  url/api/get_unique_invited/name ivited


## Tecnologias Utilizadas
- Node.js
- TypeScript 
- Express.js (https://www.npmjs.com/package/express)
- Prisma (ORM - https://www.prisma.io/docs)
- PostgreSQL
- Qrcode (https://www.npmjs.com/package/qrcode)
- Jimp (https://www.npmjs.com/package/jimp)






