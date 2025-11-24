# Express Hello World

[![NodeJS CI CD](https://github.com/fabioivi/deploy-nodejs-express-git-actions-aws-ec2/actions/workflows/main.yml/badge.svg)](https://github.com/fabioivi/deploy-nodejs-express-git-actions-aws-ec2/actions/workflows/main.yml)

Exemplo básico de API usando [Express](https://expressjs.com) com rotas simples e testes via Jest.

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicializa o servidor (`src/index.js`) na porta `3001` (ou `PORT`) |
| `npm test` | Executa a suíte de testes Jest |

## Rodando localmente

```bash
npm install
npm start
```

A aplicação estará acessível em: `http://localhost:3001`

Endpoints úteis:
* `GET /hello` → Health lógico
* `GET /test` → Mensagem de funcionamento
* `GET /crash` → Simula falha para testar reinício

## Docker

### Construir imagem

```bash
docker build -t express-hello-world .
```

### Executar container (porta padrão 3001)

```bash
docker run --name express-hello -p 3001:3001 express-hello-world
```

### Personalizar porta

```bash
docker run -e PORT=8080 -p 8080:8080 express-hello-world
```

Observação: o Dockerfile aceita a variável de ambiente PORT. Você pode definir em tempo de execução com `-e PORT=xxxx` e mapear a porta correspondente com `-p xxxx:xxxx`.

### Healthcheck manual

```bash
curl http://localhost:3001/hello
```

## Deploy (genérico)

Variáveis importantes:
* `PORT` (opcional) – altera a porta exposta
* `NODE_ENV=production` – já definido na imagem

Exemplo em um serviço que só precisa do Dockerfile: basta apontar para este repositório. O build multi-stage roda testes e gera imagem enxuta.

## Licença

MIT
