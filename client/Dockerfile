FROM node:16
RUN mkdir /app
WORKDIR /app
COPY ./build build
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm install 
EXPOSE 3000
ENV NODE_ENV production

CMD ["npx","serve","build"]