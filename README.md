# ubeer
Aplicação web para buscar motoristas que sairam com o próprio carro e acabaram ingerindo bebidas alcoólicas

# Frontend



# API

# Rotas sem autenticação

## Users

### Cadastro

Para cadastrar um novo usuário utilize a rota abaixo:

| Método | endpoint      |
| ------ | ------------- |
| POST   | /users/signup |

#### `Formato de requisição`

```json
{
  "email": "gabrielcastedo@kenzie.com.br",
  "password": "123456",
  "name": "Gabriel",
  "car": {
    "model": "fusion",
    "plate": "AZP-3705"
  }
}
```

#### `Formato de resposta - 201`

```json
{
  "newUser": {
    "email": "gabrielcastedo@kenzie.com.br",
    "name": "Gabriel",
    "car": {
      "model": "fusion",
      "plate": "AZP-3705"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FicmllbCIsImVtYWlsIjoiZ2FicmllbGNhc3RlZG9Aa2VuemllLmNvbS5iciIsImlhdCI6MTY0NzM4MDI2OCwiZXhwIjoxNjQ3NDY2NjY4fQ.eFAOeK-8gQgGN4XtAMAWZFrAVeapWih1fRqII8hyGec"
}
```

### Login

Para fazer login utilize a rota abaixo:

| Método | endpoint     |
| ------ | ------------ |
| POST   | /users/login |

#### `Formato de requisição`

```json
{
  "email": "josejose@kenzie.com.br",
  "password": "123456"
}
```

#### `Formato de resposta - 200`

```json
{
  "user": {
    "id": "434fc60c-06e1-48d8-b1bc-af2efc2cc85d",
    "email": "josejose@kenzie.com.br",
    "name": "carlos",
    "car": {
      "model": "onix",
      "plate": "AZP-3705"
    },
    "budget": 0,
    "favoritesPlaces": [],
    "travelHistoric": []
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FybG9zIiwiZW1haWwiOiJqb3Nlam9zZUBrZW56aWUuY29tLmJyIiwiaWF0IjoxNjQ3Mzc5NzczLCJleHAiOjE2NDc0NjYxNzN9.bC35Rl-JlIq2Ot73H904cC3qR4wQflvoV6ZTgONzDac"
}
```

# Rotas com autenticação

**Todas** as rotas abaixo necessitam de autenticação através do padrão `Bearer authorization`.

### dados do usuário

Para receber os dados do usuário atualizados utilize a rota abaixo:

| Método | endpoint       |
| ------ | -------------- |
| GET    | /users/:userId |

#### `Formato de resposta`

```json
{
  "id": "6155957e-bd2a-4675-bff4-bf10805b422c",
  "email": "gabrielcastedo@kenzie.com.br",
  "name": "Gabriel",
  "car": {
    "model": "fusion",
    "plate": "AZP-3705"
  },
  "budget": 0,
  "favoritesPlaces": [],
  "travelHistoric": []
}
```

### saldo do usuário

Para atualizar o saldo do usuário utilize a rota abaixo:

| Método | endpoint                                   |
| ------ | ------------------------------------------ |
| PUT    | /users/:userId/budget?value=&lt;novoSaldo> |

#### `Formato de resposta`

```json
{
  "id": "6155957e-bd2a-4675-bff4-bf10805b422c",
  "email": "gabrielcastedo@kenzie.com.br",
  "name": "Gabriel",
  "car": {
    "model": "fusion",
    "plate": "AZP-3705"
  },
  "budget": 200,
  "favoritesPlaces": [],
  "travelHistoric": []
}
```

### Lugares favoritos

Para adicionar lugares favoritos do usuário utilize a rota abaixo:

| Método | endpoint                                 |
| ------ | ---------------------------------------- |
| POST   | /users/:userId/favorites?place=&lt;text> |

#### `Formato de resposta`

```json
{
  "id": "6155957e-bd2a-4675-bff4-bf10805b422c",
  "email": "gabrielcastedo@kenzie.com.br",
  "name": "Gabriel",
  "car": {
    "model": "fusion",
    "plate": "AZP-3705"
  },
  "budget": 200,
  "favoritesPlaces": [
    {
      "id": "1234957e-ad2a-4675-bff4-bf16846b192r",
      "name": "Bar do Zé"
    }
  ],
  "travelHistoric": []
}
```

## Drivers

### Avaliações do motorista

Para receber todas as avaliações de um motorista utilize a rota abaixo:

| Método | endpoint                  |
| ------ | ------------------------- |
| GET    | /drivers/:driverId/rating |

#### `Formato de resposta`

```json
{
  "id": "101",
  "name": "Lucas",
  "rating": {
    "starsAverage": 5,
    "feedbacks": [
      {
        "id": "1234957e-ad2a-4675-bff4-bf16846b192r",
        "start": 5,
        "description": "Estava em mal estado, cuidou bem do meu carro, e me levou até minha casa com segurança. Parabéns pelo serviço."
      },
      {
        "id": "26f4969b-33d0-4ee4-95a1-11a1073701ca",
        "start": 5,
        "description": "Motorista muito profissional."
      }
    ]
  }
}
```

### Envia uma avaliação ao motorista

Para avaliar um motorista utilize a rota abaixo:

| Método | endpoint                                                                 |
| ------ | ------------------------------------------------------------------------ |
| POST   | /drivers/:driverId/rating?stars=&lt;numberOfStars>&description=&lt;text> |

#### `Formato de resposta`

```json
{
  "message": "Thanks for the feedback :)"
}
```

## Travels

### Nova viagem

Para pedir uma viagem utilize a rota abaixo:

| Método | endpoint                         |
| ------ | -------------------------------- |
| POST   | /travels/newTravel/users/:userId |

#### `Formato de requisição`

```json
{
  "from": "Habbis",
  "to": "Bar do zé",
  "distance": 12
}
```

#### `Formato de resposta`

```json
{
  "travel": {
    "id": "26f4969b-33d0-4ee4-95a1-11a1073701ca",
    "from": "Habbis",
    "to": "casa",
    "departureDate": "Tue Mar 15 2022 22:46:41 GMT-0300 (Brasilia Standard Time)",
    "arrivedDate": "",
    "value": 71.48941180343579
  },
  "driver": {
    "id": "101",
    "name": "Lucas",
    "car": {
      "model": "Ford Fiesta",
      "plate": "AGH-2679"
    },
    "rating": {
      "starsAverage": 5,
      "feedbacks": [
        {
          "id": "5",
          "start": 5,
          "description": "Estava em mal estado, cuidou bem do meu carro, e me levou até minha casa com segurança. Parabéns pelo serviço."
        }
      ]
    }
  }
}
```

### Salva a hora de chegada

Para salvar a hora da chegada utilize a rota abaixo:

| Método | endpoint                                                |
| ------ | ------------------------------------------------------- |
| PUT    | /travels/newTravel/users/:userId?travelid=&lt;travelId> |

#### `Formato de resposta`

```json
{
  "id": "d8c96d59-d8b0-4169-b5f2-4aa14b025d7b",
  "from": "Habbis",
  "to": "casa",
  "departureDate": "Tue Mar 15 2022 22:46:41 GMT-0300 (Brasilia Standard Time)",
  "arrivedDate": "Tue Mar 15 2022 23:01:11 GMT-0300 (Brasilia Standard Time)",
  "value": 71.48941180343579
}
```
