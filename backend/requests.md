# Requests
## HelloWorldController
### Hello World Controller Query Parameter Default
```
curl --location --request GET 'http://localhost:8080/hello' | jsonpp
```
### Hello World Controller Query Parameter
```
curl --location --request GET 'http://localhost:8080/hello?name=Go-City' | jsonpp
```
### Hello World Controller Path Variable
```
curl --location --request GET 'http://localhost:8080/hello/Go-City' | jsonpp
```
## PokemonController
### Get All Pokemon
```
curl --location --request GET 'http://localhost:8080/pokemon' | jsonpp
```
### Get Pokemon By Id
```
curl --location --request GET 'http://localhost:8080/pokemon/25' | jsonpp
```
### Create Pokemon
```
curl --location --request POST 'http://localhost:8080/pokemon' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "ditto",
  "height": 3,
  "weight": 40,
  "types": [
    "normal"
  ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
}' | jsonpp
```
### Update Pokemon
```
curl --location --request PUT 'http://localhost:8080/pokemon/25' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "pikachu",
  "height": 123,
  "weight": 456,
  "types": [
    "water"
  ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}' | jsonpp
```
### Delete Pokemon By Id
```
curl --location --request DELETE 'http://localhost:8080/pokemon/1'
```