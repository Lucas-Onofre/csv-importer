FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]