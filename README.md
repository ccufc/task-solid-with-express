# API documentation

## URL

```env
https://localhost:3000
```

## User

#### `GET` URL

```http
GET https://localhost:3000/user
```

#### Description

| method | description                       |
| ------ | --------------------------------- |
| `GET`  | returns all users in the database |

#### Parameters

| parameter | description   |
| --------- | ------------- |
|           | No parameters |

#### Response

| code  | description                | media type         |
| ----- | -------------------------- | ------------------ |
| `200` | returned all users         | `application/json` |
| `500` | unable to return all users | `application/json` |

#### `200`

```json
[
  {
    "id": 1,
    "name": "Jhon Doe",
    "email": "johndoe@example.com",
    "age": 20
  }
]
```

#### `500`

```json
{
  "error": "failed to retrive users"
}
```

#### `POST` URL

```http
POST https://localhost:3000/user
```

#### Description

| method | description                    |
| ------ | ------------------------------ |
| `POST` | creates a user in the database |

#### Parameters

| parameter | description   |
| --------- | ------------- |
|           | No parameters |

#### Response

| code  | description               | media type  |
| ----- | ------------------------- | ----------- |
| `201` | creates a successful user | `text/html` |
| `500` | user creation failed      | `text/html` |

#### `201`

```text
User created successfully
```

#### `500`

```text
User creation failed
```
