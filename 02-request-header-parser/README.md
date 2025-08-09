# Request Header Parser Microservice

This project is part of the FreeCodeCamp **Back End Development and APIs** course. It provides a simple API that returns information about the client’s request headers.

## Features

- Returns client's IP address
- Returns client's preferred language
- Returns client's software (User-Agent)

## API Endpoint

- **GET** `/api/whoami`

### Example Response

```json
{
  "ipaddress": "123.45.67.89",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
}
```

#### Installation
- Clone the repository

- Run npm install to install dependencies

- Run node index.js to start the server

- Open http://localhost:3000/api/whoami in your browser or use a tool like Postman