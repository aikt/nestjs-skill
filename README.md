## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- Use los decoradores @Get, @Post, @Delete, @Put
- Hice controladores separados con GET,PUT,DELETE Y POST en donde mas trabaje fue en products.
- Hice servicios para cada controlador para integrar la logica para GET, PUT, DELETE, POST
- Hice una entidad para producto donde se crean los atributos.
- Cree DTO ( Data transfer object ) con partial type para el create y update, así ya no permito que entren otros parametros y valido mediante tecnicas de isNumber, IsString, isPositive los campos.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
