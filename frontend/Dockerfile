FROM node:18-alpine3.15 as builder

WORKDIR /frontend/

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
EXPOSE 80
