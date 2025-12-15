FROM node:16
WORKDIR /Desktop/dev/my-webapp
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node","server.js"]
