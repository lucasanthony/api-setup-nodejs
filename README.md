Projeto backend.

Versions:
- Node.js = 12.20.1
- Npm = 6.14.10

# Setup MongoDb

> `sudo apt-get update`

> `sudo apt-get install -y mongodb-org`

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

## Change -> path : .env
* DATA_BASE_NOSQL_URL = 'mongodb://mongo:27017/griadb'

> `sudo docker-compose up`


