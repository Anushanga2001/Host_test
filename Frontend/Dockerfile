# get react docker image
FROM node:18-alpine

# set working directory
WORKDIR /app

# set directory for start to end
Copy ./ ./

# command for install dependencies
RUN npm install

# CMD command for begin
CMD ["npm", "run", "dev"]