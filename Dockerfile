FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm install -g npm:latest
RUN npm update
RUN npm audit fix --force
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start"]