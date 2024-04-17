# API Documentation

## Endpoints Overview

| URL                    | Method | Description                                                    |
| ---------------------- | ------ | -------------------------------------------------------------------------- |
| `"/products"`          | `GET`  | Returns an array of all products objects                                   |
|                                 | keys : `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`     |
|                                 |  `numInStock`, `companyId`                                                 |
| `"/products/:_id"`     | `GET`  | Returns a single product data object,                                      |
|                                 | keys : `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`,    |
|                                 |  `numInStock`, `companyId`                                                 |

| `"/brands"`            | `GET` | Returns an array with the `_id`, `name`, `url` and `country` of all brands
---

## Endpoint Details

###  "/products" (GET)
On success

    ```js
    {
        "status": 200,
        "data": [...]
    }
    ```
The products `data` array contains objects with keys of `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId`.

Unsuccessful status codes: 404, 500.

###  "/products/:_id" (GET)
On success

    ```js
    {
        "status": 200,
        "data": {...}
    }
    ```
The product `data` object will have keys of `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId`.

Unsuccessful status codes: 404, 500.

###  "/brands" (GET)   
On success

    ```js
    {
        "status": 200,
        "data": [...]
    }
    ```
The brands `data` array contains objects with keys of `_id`, `name`, `url` and `country`.

Unsuccessful status codes: 404, 500.

