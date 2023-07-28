FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma

COPY . .

RUN npm install 

EXPOSE 3000

RUN npx prisma generate

RUN npm run build && npm run test

CMD ["npm", "start"]