# Timestamp Microservice

This project is part of the FreeCodeCamp **Back End Development and APIs** course. It provides a simple API that accepts a date string or timestamp and returns the time in Unix and UTC formats.

## Features

- Accepts date strings or Unix timestamps via API endpoint.
- Returns JSON with both Unix timestamp (milliseconds) and UTC date string.
- Handles empty date input by returning the current date/time.
- Returns error JSON for invalid dates.

## API Endpoints

- **GET** `/api/:date?`  
  - `date` (optional): A date string (e.g. `2015-12-25`) or a Unix timestamp (e.g. `1451001600000`).  
  - If empty, returns current date/time.

### Examples

- `/api/2015-12-25`  
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

- `/api/1451001600000`
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

- `/api`
{
  "unix": 1672522565000,
  "utc": "Fri, 31 Dec 2022 18:16:05 GMT"
}

- `/api/invalid-date`
{
  "error": "Invalid Date"
}

#### Installation

Clone the repository

Run npm install to install dependencies

Run node index.js to start the server

Open http://localhost:3000 in your browser