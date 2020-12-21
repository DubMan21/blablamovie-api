# blablamovie-api
The BlabalMovie API to elect the favorite movie of users

## Requirements
* Docker - You can install this tool with the following instructions at [https://docs.docker.com/install/linux/docker-ce/ubuntu/](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* Docker Compose - You can install this tool with the following instructions [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Installation
* Create a `.env` file at the root of the project. You must insert the following environment variables :
```bash
APP_PORT=3000
DB_PORT=3306
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```
* Run the command `npm install`
* Run the command: `docker-compose up`
* The API can be accessed on [http://localhost:3000](http://localhost:3000)