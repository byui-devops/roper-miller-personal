# Roper's Bulletin Board App

## Hosted Site

S3 Website URL: http://roper-bulletin-board.s3-website-us-east-1.amazonaws.com

## API Endpoints

- GET /posts  
   https://cm0y47fnef.execute-api.us-east-1.amazonaws.com/posts

- POST /posts  
   https://cm0y47fnef.execute-api.us-east-1.amazonaws.com/posts

## DynamoDB Table Structure

Table Name: BulletinPosts

Primary Key:
- postId (String)

Attributes:
- postId: unique identifier for each post
- title: title of the event/post
- content: details of the event/post
- timestamp: date and time the post was created

## Architecture Diagram

```text
[ User Browser ]
        |
        v
[ S3 Static Website (Frontend UI) ]
        |
        |  HTTP Requests (GET, POST)
        v
[ API Gateway ]
        |
        v
[ AWS Lambda Function ]
        |
        |  Read/Write Data
        v
[ DynamoDB Table (Posts) ]
