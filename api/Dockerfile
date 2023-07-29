FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

RUN npm install

EXPOSE 3000

RUN npm run build

RUN npm run test

CMD ["npm", "start"]