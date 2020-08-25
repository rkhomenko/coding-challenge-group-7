FROM node:13-alpine3.11 as build
WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH
ENV PORT 3000
COPY package*.json /code/
RUN npm install
COPY . /code
RUN ["npm", "run", "build"]

FROM nginx:1.16-alpine
COPY --from=build /code/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]