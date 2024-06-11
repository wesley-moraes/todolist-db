# My Costs Database

## Deploy aplicação: [my-costs](https://my-costs-two.vercel.app/)
## Repo aplicação: [my-costs-repo](https://github.com/wesley-moraes/my-costs)

## Descrição
Este repositório contém a base de dados `db.json` utilizada pela aplicação [My Costs](https://my-costs-two.vercel.app/), que é uma aplicação web para gerenciamento de projetos desenvolvida em React.js. A base de dados é gerida pelo json-server para simular uma API RESTful.

## Hospedagem
Foi hospedado no Render! Para que o Web-Service ficasse disponível para comunicação online.

## Instalação
Para clonar e configurar o repositório, siga os passos abaixo:

```bash
git clone https://github.com/wesley-moraes/my-costs-db.git
cd my-costs-db
npm install
```

## Uso
Para iniciar o json-server e disponibilizar a base de dados localmente, execute o seguinte comando:

```bash
npm run start
```

Por padrão, o json-server estará acessível em `http://localhost:5000`.

## Configuração
Se necessário, você pode modificar o arquivo `db.json` para adicionar, remover ou atualizar os dados conforme sua necessidade. Certifique-se de que as rotas na aplicação principal [My Costs](https://my-costs-two.vercel.app/) estejam configuradas para apontar para o servidor correto.

Exemplo de configuração de rota na aplicação React:

```bash
fetch("http://localhost:5000/projects", { ... })
```

## Contato
Para mais informações ou para reportar problemas, entre em contato:

- Email: wesley.moraes@example.com
- GitHub: [wesley-moraes](https://github.com/wesley-moraes/)
- LinkedIn: [Wesley Moraes](https://www.linkedin.com/in/wesley-moraes/)