# File Metadata Microservice

A [FreeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs project.  
This app allows users to upload a file and returns its metadata (name, type, size).

---

## 🚀 Features
- Upload a file using the form field `upfile`
- Receive JSON response with:
  ```json
  {
    "name": "filename.ext",
    "type": "mime/type",
    "size": 1234
  }
- Built with Node.js, Express, and Multer

### 🛠 Installation & Usage
- Clone this repo:

    `git clone https://github.com/your-username/file-metadata-microservice.git`
    `cd file-metadata-microservice`

- Install dependencies:

    `npm install`

- Run the app:

    `npm start`

- Visit in browser:

    `http://localhost:3000`


#### 📡 API Endpoint

- POST /api/fileanalyse

Form field name: upfile

Response:

```json
{
  "name": "myfile.txt",
  "type": "text/plain",
  "size": 42
}
```
