<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

Clone the repository:

```sh
git clone https://github.com/JohanPosso/humble-superhero-api.git
cd humble-superhero-api
```

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Humble Superhero API

## Description

This is a simple API built with NestJS to manage a list of superheroes. Each superhero has a name, a superpower, and a humility score (from 1 to 10). The data is stored in an in-memory database.

## Endpoints

### POST /superheroes

Adds a new superhero.

**Request Body:**

```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
```

**Validations:**

- Name and superpower are required.
- The humility score must be a number between 1 and 10.

**Response:**

```json
{
  "id": "46574efa-3a1b-487f-9226-a508707b7aba",
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
```

### GET /superheroes

Retrieves the list of superheroes sorted by their humility score (from highest to lowest).

**Response:**

```json
[
  {
    "id": "46574efa-3a1b-487f-9226-a508707b7aba",
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  },
  {
    "id": "46574efa-3a1b-487f-9226-d706137h7tvf",
    "name": "Batman",
    "superpower": "Martial Arts",
    "humilityScore": 7
  }
]
```

## Tests

A Jest test is included to validate the creation of a superhero.

## Collaboration

To improve or expand this API with a teammate, I would suggest:

1. Implementing a real database (such as PostgreSQL or MongoDB) instead of in-memory storage.
2. Adding authentication with JWT to protect the API.
3. Enhancing documentation with Swagger.
4. Implementing pagination in the `GET /superheroes` endpoint.
5. Conducting code reviews and pair programming sessions to improve code quality.

## If I Had More Time

If I had more time, I would explore:

- Implementing WebSockets for real-time updates.
- Integrating with an external API to fetch additional superhero information.
