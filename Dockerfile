FROM risingstack/alpine:3.7-v8.10.0-4.8.0

COPY package.json package.json  
RUN npm install

EXPOSE 52525

# Add your source files
COPY . .  
CMD ["npm","start"]  