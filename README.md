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

## Use the API

### 1. Create a user

##### 1.1 Request

* Method : `POST`
* Route : `/user`
* Body : 
```json 
{
  "username": "username",
  "email": "user@gmail.com",
  "birthDate": "2000-03-12"
}
```

##### 1.2 Response

* Success response
   * Status code : `201`
   * Body :
```json 
{
  "createdAt": "2020-12-22T11:28:24.541Z",
  "choices": [],
  "_id": "5fe1d85f266db701db1cd897",
  "username": "username",
  "email": "user@gmail.com",
  "birthDate": "2000-03-12T00:00:00.000Z"
}
```
* Bad Request response
   * Status code : `400`
   * Body :
```json 
{
  "statusCode": 400,
  "message": [
    "username must be longer than or equal to 3 characters"
  ],
  "error": "Bad Request"
}
```