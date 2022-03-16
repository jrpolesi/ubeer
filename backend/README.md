```json
{
  "users": [
    {
      "id": "",
      "name": "",
      "email": "",
      "password": "",
      "car": {
        "model": "",
        "plate": ""
      },
      "favoritesPlaces": [
        {
          "id": "",
          "name": ""
        }
      ],
      "travelHistoric": [
        {
          "id": "",
          "from": "",
          "to": "",
          "departureDate": "",
          "arrivedDate": "",
          "value": 0
        }
      ],
      "budget": 0
    }
  ],
  "drivers": [
    {
      "id": "",
      "name": "",
      "car": {
        "model": "",
        "plate": ""
      },
      "rating": {
        "starsAverage": 5,
        "feedbacks": [
          {
            "id": "",
            "start": 5,
            "description": ""
          }
        ]
      }
    }
  ]
}
```

# uBeer API

# Rotas sem autenticação

## Users

### Cadastro

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

#### `Formato de resposta`

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

#### `Formato de resposta`

```json
{
  "userWithoutPassword": {
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

### Recebe todos usuários

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
  "password": "$2a$10$vPpQR5PWWFOE9TgTSJTiQ.OlqPRRFDwURHpQrgPBEdJZvJzMOBY9q",
  "budget": 0,
  "favoritesPlaces": [],
  "travelHistoric": []
}
```

### Atualiza saldo do usuário

| Método | endpoint                                   |
| ------ | ------------------------------------------ |
| PUT    | /users/:userId/budget?value=&lt;novoSaldo> |

#### `Formato de resposta`

```
STATUS CODE = 204
```

### Adiciona lugar nos favoritos

| Método | endpoint                                 |
| ------ | ---------------------------------------- |
| POST   | /users/:userId/favorites?place=&lt;text> |

#### `Formato de requisição`

#### `Formato de resposta`

```json
{
	"message": "Favorites was updated"
}
```

## Drivers

### Recebe as avaliações do motorista

| Método | endpoint                  |
| ------ | ------------------------- |
| GET    | /drivers/:driverId/rating |

#### `Formato de requisição`

```

```

#### `Formato de resposta`

```

```

### Envia uma avaliação ao motorista

| Método | endpoint                  |
| ------ | ------------------------- |
| POST   | /drivers/:driverId/rating |

#### `Formato de requisição`

```

```

#### `Formato de resposta`

```

```

## Travels

### Recebe as avaliações do motorista

| Método | endpoint                  |
| ------ | ------------------------- |
| POST    | /travels/newTravel/users/:userId |

#### `Formato de requisição`

```

```

#### `Formato de resposta`

```

```

### Envia uma avaliação ao motorista

| Método | endpoint                  |
| ------ | ------------------------- |
| PUT   | /travels/newTravel/users/:userId |

#### `Formato de requisição`

```

```

#### `Formato de resposta`

```

```
