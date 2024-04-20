# API Documentation

## Endpoints Overview

### Product Endpoints
| URL                    | Method | Description                                                                                           |
|------------------------|--------|-------------------------------------------------------------------------------------------------------|
| `"/products"`          | `GET`  | Returns an array of all products objects with keys: `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId` |
| `"/products/:_id"`     | `GET`  | Returns a single product data object with keys: `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId` |

### User Endpoints
| URL                   | Method | Description                                                                                           |
|-----------------------|--------|-------------------------------------------------------------------------------------------------------|
| `"/signUp"`           | `POST` | Posts a new user to the database using user ID                                                          |
| `"/login"`            | `POST` | Retrieves user from the database and logs the user in                                                   |

### Order Endpoints
| URL                   | Method | Description                                                                                           |
|-----------------------|--------|-------------------------------------------------------------------------------------------------------|
| `"/checkout"`         | `POST` | Creates an order from the cart and adds it to the database, also updates the stock                      |

### Brand Endpoints
| URL                   | Method | Description                                                                                           |
|-----------------------|--------|-------------------------------------------------------------------------------------------------------|
| `"/brands"`           | `GET`  | Returns an array with the `_id`, `name`, `url`, and `country` of all brands                             |


## Endpoint Details

### 1. Products Endpoints

#### `"/products"`
- **Method:** `GET`
- **Description:** Returns an array of all product objects.
- **Keys:** `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId`
- **Response:** 
On success:
{
	"status": 200,
	"data": [
		{
			"_id": 6543,
			"name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
			"price": "$49.99",
			"body_location": "Wrist",
			"category": "Fitness",
			"imageSrc": "data:i...",
			"numInStock": 9,
			"companyId": 19962
		}, 
    ]
}.... and more items data

Unsuccessful status codes: 404, 500.

#### `"/products/:_id"`
- **Method:** `GET`
- **Description:** Returns a single product object based on the provided `_id`.
- **Keys:** `_id`, `name`, `price`, `body_location`, `category`, `imageSrc`, `numInStock`, `companyId`
- **Response:** 
On success:
{
	"status": 200,
	"data": [
		{
			"_id": 6543,
			"name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
			"price": "$49.99",
			"body_location": "Wrist",
			"category": "Fitness",
			"imageSrc": "data:i...",
			"numInStock": 9,
			"companyId": 19962
		}, 
    ]
}

Unsuccessful status codes: 404, 500.

### 2. User Endpoints

#### `"/signUp"`
- **Method:** `POST`
- **Description:** Adds a new user to the database.
- **Parameters:** `fname`, `lname`, `phone`, `email`, `address`, `city`, `province`, `postcode`, `country`, `password`, `confirmPassword`
- **Response:** 
On success:
{
	"status": 201,
	"_id": "a7f17b71-f1d3-4049-9455-04b3ee4197b0"
}

Unsuccessful status codes: 404, 400, 500.

#### `"/login"`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Parameters:** `email`, `password`
- **Response:** 
On success:
{
	"status": 200,
	"message": "Login successfull",
	"user": {
		"_id": "a7f17b71-f1d3-4049-9455-04b3ee4197b0",
		"fname": "Oscar",
		"lname": "Lore",
		"phone": "+1 (234) 523-4237",
		"email": "oscar.lore@blopiblop.com",
		"address": "43 regional street",
		"city": "Montreal",
		"province": "Quebec",
		"postcode": "H4N0T7",
		"country": "Canada"
	}
}

Unsuccessful status codes: 404, 401 500.

### 3. Order Endpoint

#### `"/checkout"`
- **Method:** `POST`
- **Description:** Creates a new order from the cart and updates the stock in the database.
- **Parameters:** 
  - `userId`
  - `shippingInfo`: Object containing:
    - `fname`
    - `lname`
    - `address`
    - `city`
    - `province`
    - `postcode`
    - `country`
    - `items`: Array of objects containing:
    - `itemId`
    - `quantity`
- **Response:** 
On success:
{
	"status": 201,
	message: "Order created successfully"
}
Unsuccessful status codes: 400, 500.

### 4. Brands Endpoint

#### `"/brands"`
- **Method:** `GET`
- **Description:** Retrieves all brands from the database.
- **Keys:** `_id`, `name`, `url`, `country`
- **Response:** 
On success:
{
	"status": 200,
	"data": [
		{
			"_id": 19962,
			"name": "Barska",
			"url": "http://www.barska.com/",
			"country": "United States"
		},
		{
			"_id": 16384,
			"name": "Belkin",
			"url": "http://www.belkin.com/",
			"country": "United States"
		},
    ]
} ...and more brands
Unsuccessful status codes: 404, 500.



