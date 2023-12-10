FROM node:18.13.0 as build-step

#RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build --prod

FROM nginx:1.25.3
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /usr/local/app/dist/frontend /usr/share/nginx/html

EXPOSE 80
