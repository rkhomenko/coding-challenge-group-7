FROM node:13-alpine3.11
WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH
ENV PORT 3000
COPY package*.json /code/
RUN npm install
EXPOSE 3000
COPY . /code
CMD ["npm", "start"]
