# URL Shortener Microservice

This project is a URL shortener microservice built with Node.js and Express.  
Users can submit a URL and receive a shortened link that redirects to the original URL.

---

## Features

- Accepts a URL from the user and validates it using DNS lookup  
- Generates a short numeric ID for the URL  
- Redirects to the original URL when visiting the short URL  
- Returns appropriate error messages for invalid URLs  

---

## How to Use

### Setup

1. Clone or download the repository.  
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node index.js
    ```

4. The server listens on port 3000 or the port defined in the `PORT` environment variable.

---

## API Endpoints

### Shorten a URL

- **Endpoint:** `/api/shorturl`  
- **Method:** `POST`  
- **Request Body:**  
  - `url` : the full URL to shorten (must start with `http://` or `https://`)  

- **Successful Response:**

```json
{
  "original_url": "https://www.example.com",
  "short_url": 1
}
```
- **Error Response (if URL is invalid):**

```json
{
  "error": "invalid url"
}
```
#### Redirect to Original URL
- **Endpoint**: `/api/shorturl/:short_url`

- **Method**: `GET`

- **Behavior**: 
    - Redirects to the original URL associated with the short URL

- **Example**:
    - Visiting `/api/shorturl/1` will redirect to the corresponding original URL.

##### Important Notes
- Submitted URLs must include the protocol `(http:// or https://)` or they will be rejected.

- Data is stored in memory only and will reset when the server restarts.

###### Author
- **Name**:
    - Melika nick
- **Email**:
    - nikmelika8@gmail.com

- **GitHub**:
    - `github.com/melika-nick`