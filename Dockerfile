FROM centos:7

# Get nodejs repos
RUN curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -

# Install nodejs, currently 7.4.0
RUN yum -y install nodejs-7.4.* gcc-c++ make git && \
    yum -y clean all

RUN mkdir -p /app/
WORKDIR /app/
COPY . /app/

RUN npm install
EXPOSE 8081
CMD ["npm", "run", "start"]
