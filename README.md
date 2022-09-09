# Node+Sequelize 

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nicolasGuinazu/iMachinary
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
4. Configure your .env
   ```js
   DB=
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   PORT=
   ```
5. Import database (in the database directory you'll find the sql dump)

6. Run proyect
   ```sh
   npm run dev
   ```


# API endpoints


## GET
[/movies](#get-movies) <br/>
[/people](#get-people) <br/>


___

### GET /movies
Get all movies


**Response**

```
{
    "success": true,
    "data": {
        "movieList": [
            {
                "id": 1,
                "title": "Memento",
                "year": "2010-10-04T00:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "people": [
                    {
                        "id": 1,
                        "name": "Guy",
                        "last_name": "Pearce",
                        "age": 54,
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 149,
                            "person_id": 1,
                            "movie_id": 1,
                            "actor": 1,
                            "director": 0,
                            "producer": 0
                        }
                    },
                    {
                        "id": 3,
                        "name": "Cristopher",
                        "last_name": "Nolan",
                        "age": 52,
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 151,
                            "person_id": 3,
                            "movie_id": 1,
                            "actor": 0,
                            "director": 0,
                            "producer": 1
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "The Big Lebowski",
                "year": "2010-10-04T00:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "people": [
                    {
                        "id": 2,
                        "name": "Steve",
                        "last_name": "Buscemi",
                        "age": 64,
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 150,
                            "person_id": 2,
                            "movie_id": 2,
                            "actor": 0,
                            "director": 0,
                            "producer": 1
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Stalins death",
                "year": "2010-10-04T00:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "people": [
                    {
                        "id": 2,
                        "name": "Steve",
                        "last_name": "Buscemi",
                        "age": 64,
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 153,
                            "person_id": 2,
                            "movie_id": 3,
                            "actor": 1,
                            "director": 0,
                            "producer": 0
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Inception",
                "year": "2010-10-04T00:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "people": []
            }
        ]
    }
}
```
___

### GET /movies/{name}
Get a single movie

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | The name of the movie you're searching <br/><br/>                                                              |

**Response**
```
{
  "success": true,
  "data": {
    "movie": {
      "id": 2,
      "title": "The Big Lebowski",
      "year": "2010-10-04T00:00:00.000Z",
      "createdAt": null,
      "updatedAt": null,
      "people": [
        {
          "id": 2,
          "name": "Steve",
          "last_name": "Buscemi",
          "age": 64,
          "createdAt": null,
          "updatedAt": null,
          "PersonMovie": {
            "id": 150,
            "person_id": 2,
            "movie_id": 2,
            "actor": 0,
            "director": 0,
            "producer": 1
          }
        }
      ]
    }
  }
}ks
```
___

### GET /people
Get all people performing/working as actor, producer or director.

**Response**

```
{
  "success": true,
  "data": {
    "people": [
      {
        "id": 1,
        "name": "Guy",
        "last_name": "Pearce",
        "age": 54,
        "createdAt": null,
        "updatedAt": null,
        "movies": [
          {
            "id": 1,
            "title": "Memento",
            "year": "2010-10-04T00:00:00.000Z",
            "createdAt": null,
            "updatedAt": null,
            "PersonMovie": {
              "id": 149,
              "person_id": 1,
              "movie_id": 1,
              "actor": 1,
              "director": 0,
              "producer": 0
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "Steve",
        "last_name": "Buscemi",
        "age": 64,
        "createdAt": null,
        "updatedAt": null,
        "movies": [
          {
            "id": 2,
            "title": "The Big Lebowski",
            "year": "2010-10-04T00:00:00.000Z",
            "createdAt": null,
            "updatedAt": null,
            "PersonMovie": {
              "id": 150,
              "person_id": 2,
              "movie_id": 2,
              "actor": 0,
              "director": 0,
              "producer": 1
            }
          },
          {
            "id": 3,
            "title": "Stalins death",
            "year": "2010-10-04T00:00:00.000Z",
            "createdAt": null,
            "updatedAt": null,
            "PersonMovie": {
              "id": 153,
              "person_id": 2,
              "movie_id": 3,
              "actor": 1,
              "director": 0,
              "producer": 0
            }
          }
        ]
      },
      {
        "id": 3,
        "name": "Cristopher",
        "last_name": "Nolan",
        "age": 52,
        "createdAt": null,
        "updatedAt": null,
        "movies": [
          {
            "id": 1,
            "title": "Memento",
            "year": "2010-10-04T00:00:00.000Z",
            "createdAt": null,
            "updatedAt": null,
            "PersonMovie": {
              "id": 151,
              "person_id": 3,
              "movie_id": 1,
              "actor": 0,
              "director": 0,
              "producer": 1
            }
          }
        ]
      }
    ]
  }
}
```
___

### GET /people/{name}/actor
Get a single actor

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | The name of the person performing as actor, with their asssociated movies <br/><br/>                                                              |


**Response**

```
{
    "success": true,
    "data": {
        "moviesAsActor": [
            {
                "id": 2,
                "name": "Steve",
                "last_name": "Buscemi",
                "age": 64,
                "createdAt": null,
                "updatedAt": null,
                "movies": [
                    {
                        "id": 3,
                        "title": "Stalins death",
                        "year": "2010-10-04T00:00:00.000Z",
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 153,
                            "person_id": 2,
                            "movie_id": 3,
                            "actor": 1,
                            "director": 0,
                            "producer": 0
                        }
                    }
                ]
            }
        ]
    }
}
```
___

### GET /people/{name}/producer
Get a single producer

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | The name of the person performing as producer, with their asssociated movies <br/><br/>                                                              |


**Response**

```
{
    "success": true,
    "data": {
        "moviesProducer": [
            {
                "id": 2,
                "name": "Steve",
                "last_name": "Buscemi",
                "age": 64,
                "createdAt": null,
                "updatedAt": null,
                "movies": [
                    {
                        "id": 2,
                        "title": "The Big Lebowski",
                        "year": "2010-10-04T00:00:00.000Z",
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 150,
                            "person_id": 2,
                            "movie_id": 2,
                            "actor": 0,
                            "director": 0,
                            "producer": 1
                        }
                    }
                ]
            }
        ]
    }
}
```
___

### GET /people/{name}/director
Get a single director

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | required | string  | The name of the person performing as director, with their asssociated movies <br/><br/>                                                              |


**Response**

```
{
    "success": true,
    "data": {
        "moviesDirector": [
            {
                "id": 3,
                "name": "Cristopher",
                "last_name": "Nolan",
                "age": 52,
                "createdAt": null,
                "updatedAt": null,
                "movies": [
                    {
                        "id": 1,
                        "title": "Memento",
                        "year": "2010-10-04T00:00:00.000Z",
                        "createdAt": null,
                        "updatedAt": null,
                        "PersonMovie": {
                            "id": 151,
                            "person_id": 3,
                            "movie_id": 1,
                            "actor": 0,
                            "director": 1,
                            "producer": 0
                        }
                    }
                ]
            }
        ]
    }
}
```
___