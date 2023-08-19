# API Documentation

This document provides an overview of the endpoints available in the Node.js server for interacting with the GNews API.

## Server Information

- Base URL: http://localhost:3000
- Port: 3000

## Fetch News Articles

Endpoint to fetch news articles from the GNews API and save them in memory.

- **URL:** `/fetch-news`
- **Method:** GET
- **Response:**
  - Success: `200 OK`
    ```json
    {
      "message": "News articles fetched and saved successfully."
    }
    ```
  - Error: `500 Internal Server Error`
    ```json
    {
      "error": "An error occurred while fetching news articles."
    }
    ```

## Fetch Articles by Author and Title

Endpoint to fetch a specific number of articles based on author and title criteria.

- **URL:** `/fetch-articles`
- **Method:** GET
- **Query Parameters:**
  - `author` (optional): Filter articles by author's name.
  - `title` (optional): Filter articles by title containing the specified text.
  - `count` (optional): Number of articles to fetch (default: all matching articles).
- **Response:** List of articles
  ```json
  [
    {
      "title": "Article Title",
      "description": "Article Description",
      "source": {
        "name": "Source Name"
      },
      // ... other article properties
    },
    // ... more articles
  ]
