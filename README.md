## Setup base para uma API em NodeJS

* Dependências básicas necessárias
* Dependências para testes de integração e unidade

### Como utilizar
> git clone https://github.com/lucasanthony/api-setup-nodejs.git

> Setar a DB_URL_PROD e DB_URL_DEV do .env

> npm start ou npm run dev

Versions:
- Node.js = 12.20.1
- Npm = 6.14.10

# Setup NodeJS

> `npm install`

> `npm start` //for run server in development mode (automatic refresh mode)


# Setup Docker

> `sudo apt-get update`

> `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

> `sudo apt-key fingerprint 0EBFCD88`

> `sudo apt-get install docker docker.io`

> `sudo curl -L "https://github.com/docker/compose/releases/download/1.28.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

> `sudo chmod +x /usr/local/bin/docker-compose`

> `sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`

# Generating Images

## path : root

> `sudo docker-compose up`


