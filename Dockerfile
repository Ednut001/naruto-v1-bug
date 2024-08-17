FROM quay.io/Ednut001/:beta
RUN git clone https://github.com/Ednut001/Naruto-v1+bug /root/Naruto.js/
WORKDIR /root/naruto.js/
RUN yarn install
CMD ["npm", "start"]
