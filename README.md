# Tasks API Documentation

The Tasks API allows users to manage a collection of tasks through basic CRUD operations.

Base URL: `http://localhost:3000/api`

## Endpoints

### 1. Get All Tasks

- **URL**: `/tasks`
- **Method**: `GET`
- **Description**: Retrieves a list of all tasks.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: 
    ```json
    [
        {
            "id": 1,
            "title": "Sample Task",
            "description": "This is a sample task."
        },
        {
            "id": 2,
            "title": "Another Task",
            "description": "This is another task."
        }
    ]
    ```
- **Error Response**:
  - **Code**: `500 Internal Server Error`
  - **Content**: 
    ```json
    {
        "error": {
            "message": "Internal server error."
        }
    }
    ```

### 2. Get Task by ID

- **URL**: `/tasks/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific task by its ID.
- **URL Parameters**:
  - `id` (integer): ID of the task to retrieve.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: 
    ```json
    {
        "id": 1,
        "title": "Sample Task",
        "description": "This is a sample task."
    }
    ```
- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**: 
    ```json
    {
        "error": {
            "message": "Task not found."
        }
    }
    ```

### 3. Create Task

- **URL**: `/tasks`
- **Method**: `POST`
- **Description**: Creates a new task.
- **Data Parameters**:
  - `title` (string, required): Title of the task.
  - `description` (string, required): Description of the task.
- **Success Response**:
  - **Code**: `201 Created`
  - **Content**: 
    ```json
    {
        "id": 3,
        "title": "New Task",
        "description": "This is a new task."
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: 
    ```json
    {
        "error": {
            "message": "Title and description are required."
        }
    }
    ```

### 4. Update Task

- **URL**: `/tasks/:id`
- **Method**: `PUT`
- **Description**: Updates an existing task by its ID.
- **URL Parameters**:
  - `id` (integer): ID of the task to update.
- **Data Parameters**:
  - `title` (string, required): New title of the task.
  - `description` (string, required): New description of the task.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: 
    ```json
    {
        "id": 1,
        "title": "Updated Task",
        "description": "This is an updated task."
    }
    ```
- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**: 
    ```json
    {
        "error": {
            "message": "Task not found."
        }
    }
    ```

### 5. Delete Task

- **URL**: `/tasks/:id`
- **Method**: `DELETE`
- **Description**: Deletes a task by its ID.
- **URL Parameters**:
  - `id` (integer): ID of the task to delete.
- **Success Response**:
  - **Code**: `204 No Content`
  - **Content**: No content returned.
- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**: 
    ```json
    {
        "error": {
            "message": "Task not found."
        }
    }
    ```

## Usage

To use these APIs, make HTTP requests to the corresponding endpoints with the appropriate methods and parameters as described above.
