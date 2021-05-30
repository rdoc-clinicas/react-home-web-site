FROM node:14-alpine
COPY . .

RUN npm install && \
    npm run build

EXPOSE 3000
CMD ["npm","run","start"]
