# 📚 API Documentation

Complete API documentation for the Notes App backend.

## Base URL

```
http://localhost:5000/api
```

---

## Endpoints

### 1. Get All Notes

Retrieve all notes from the database.

**Endpoint:** `GET /notes`

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "My First Note",
    "content": "This is the content of my first note.",
    "createdAt": "2025-10-23T10:30:00.000Z",
    "updatedAt": "2025-10-23T10:30:00.000Z"
  }
]
```

**Status Codes:**
- `200 OK` - Success
- `500 Internal Server Error` - Server error

**Example:**
```javascript
// Using Axios
const response = await axios.get('http://localhost:5000/api/notes');
console.log(response.data);
```

---

### 2. Get Single Note

Retrieve a specific note by ID.

**Endpoint:** `GET /notes/:id`

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the note

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my first note.",
  "createdAt": "2025-10-23T10:30:00.000Z",
  "updatedAt": "2025-10-23T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Success
- `404 Not Found` - Note not found
- `500 Internal Server Error` - Server error

**Example:**
```javascript
const response = await axios.get('http://localhost:5000/api/notes/507f1f77bcf86cd799439011');
```

---

### 3. Create Note

Create a new note.

**Endpoint:** `POST /notes`

**Request Body:**
```json
{
  "title": "New Note Title",
  "content": "Content of the new note"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "New Note Title",
  "content": "Content of the new note",
  "createdAt": "2025-10-23T10:30:00.000Z",
  "updatedAt": "2025-10-23T10:30:00.000Z"
}
```

**Status Codes:**
- `201 Created` - Note created successfully
- `400 Bad Request` - Invalid data
- `500 Internal Server Error` - Server error

**Example:**
```javascript
const newNote = {
  title: "Shopping List",
  content: "Buy milk, eggs, bread"
};

const response = await axios.post('http://localhost:5000/api/notes', newNote);
console.log(response.data);
```

---

### 4. Update Note

Update an existing note.

**Endpoint:** `PUT /notes/:id`

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the note

**Request Body:**
```json
{
  "title": "Updated Note Title",
  "content": "Updated content"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Updated Note Title",
  "content": "Updated content",
  "createdAt": "2025-10-23T10:30:00.000Z",
  "updatedAt": "2025-10-23T11:45:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Note updated successfully
- `404 Not Found` - Note not found
- `400 Bad Request` - Invalid data
- `500 Internal Server Error` - Server error

**Example:**
```javascript
const updatedNote = {
  title: "Shopping List (Updated)",
  content: "Buy milk, eggs, bread, cheese"
};

const response = await axios.put('http://localhost:5000/api/notes/507f1f77bcf86cd799439011', updatedNote);
```

---

### 5. Delete Note

Delete a note by ID.

**Endpoint:** `DELETE /notes/:id`

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the note

**Response:**
```json
{
  "message": "Note deleted successfully"
}
```

**Status Codes:**
- `200 OK` - Note deleted successfully
- `404 Not Found` - Note not found
- `500 Internal Server Error` - Server error

**Example:**
```javascript
const response = await axios.delete('http://localhost:5000/api/notes/507f1f77bcf86cd799439011');
console.log(response.data.message); // "Note deleted successfully"
```

---

## Error Responses

All endpoints return errors in the following format:

```json
{
  "message": "Error description",
  "error": "Detailed error message (in development mode only)"
}
```

**Common Error Codes:**
- `400 Bad Request` - Invalid input data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

---

## Data Models

### Note Schema

```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

**Field Descriptions:**
- `title` (String, required) - The title of the note (whitespace trimmed)
- `content` (String, required) - The main content of the note
- `createdAt` (Date) - Timestamp when the note was created
- `updatedAt` (Date) - Timestamp when the note was last updated

---

## Testing with cURL

### Get All Notes
```bash
curl http://localhost:5000/api/notes
```

### Create Note
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Note","content":"This is a test"}'
```

### Update Note
```bash
curl -X PUT http://localhost:5000/api/notes/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Test","content":"Updated content"}'
```

### Delete Note
```bash
curl -X DELETE http://localhost:5000/api/notes/507f1f77bcf86cd799439011
```

---

## Rate Limiting

Currently, there are no rate limits implemented. This may be added in future versions.

---

## CORS Configuration

The API allows requests from all origins (`*`). In production, you should restrict this to your frontend domain.

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

---

## Authentication

⚠️ **Note:** This API currently does not implement authentication. All endpoints are publicly accessible. Adding authentication (JWT, OAuth) is recommended for production use.

---

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Pagination for large datasets
- [ ] Filtering and sorting options
- [ ] Note categories/tags
- [ ] File attachments
- [ ] Note sharing capabilities

---

**For questions or issues, please open an issue on GitHub.**
