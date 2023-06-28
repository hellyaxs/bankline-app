# this code is used to create a docker image of the application angular // forma muito pessada de fazer
# FROM node:12.22.12 as angular
# WORKDIR /app
# COPY package*.json  ./
# RUN npm install
# COPY /dist/bankline .
# RUN npm run build
# EXPOSE 4200
# CMD ["npm", "start"]



### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY /dist/bankline-app /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/nginx.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
EXPOSE 80
