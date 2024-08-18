FROM quay.io/taira_makino/taira_tech:latest

RUN git clone https://github.com/Ednut001/Naruto-v1-bug /root/Anonphoenix007

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Anonphoenix007/node_modules

# Install dependencies
WORKDIR /root/Anonphoenix007
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
