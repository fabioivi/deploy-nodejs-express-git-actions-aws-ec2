FROM node:lts

WORKDIR /app

# Copia manifestos primeiro para melhor cache
COPY package*.json ./

# Instala dependências (usa ci se houver lockfile)
RUN npm ci || npm install

# Copia o código da aplicação
COPY . .

# Suporte a porta via variável de ambiente com fallback 3001
ARG PORT=3001
ENV PORT=$PORT
EXPOSE $PORT

# Inicia a aplicação
CMD ["npm", "start"]