# To Do List Database

## Deploy aplicação: [To Do List](https://todolist-chi-fawn.vercel.app/)
## Repo aplicação: [To Do List](https://github.com/wesley-moraes/todolist)

## Descrição
Este repositório contém a base de dados `db.json` utilizada pela aplicação [To Do List](https://todolist-chi-fawn.vercel.app/), que é uma aplicação web para gerenciamento de projetos desenvolvida em React.js. A base de dados é gerida pelo json-server para simular uma API RESTful.

## Hospedagem
Foi hospedado no Render! Para que o Web-Service ficasse disponível para comunicação online.

## Instalação
Para clonar e configurar o repositório, siga os passos abaixo:

```bash
git clone https://github.com/wesley-moraes/todolist-db.git
cd todolist-db
npm install
```

## Uso
Para iniciar o json-server e disponibilizar a base de dados localmente, execute o seguinte comando:

```bash
npm run start
```

Por padrão, o json-server estará acessível em `http://localhost:5000`.

## Configuração
Se necessário, você pode modificar o arquivo `db.json` para adicionar ou remover os dados conforme sua necessidade. Certifique-se de que as rotas na aplicação principal [To Do List](https://todolist-chi-fawn.vercel.app/) estejam configuradas para apontar para o servidor correto.

Exemplo de configuração de rota na aplicação React:

```bash
API = "http://localhost:5000/projects"
```

## Contato
Para mais informações ou para reportar problemas, entre em contato:

- Email: wesley.moraes@example.com
- GitHub: [wesley-moraes](https://github.com/wesley-moraes/)
- LinkedIn: [Wesley Moraes](https://www.linkedin.com/in/wesley-moraes/)
