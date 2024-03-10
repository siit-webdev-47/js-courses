# Course 12

## Recap - Fetch using the Chuck Norris API
1. What is an API
2. What are the URL query parameters 
3. Creating a UI for selecting quotes for a specific category
    - building the UI using HTML & CSS - `recording time 0:41:48`
    - fetching a quote without specifying a category - `recording time 0:48:20`
    - fetching the categories and creating dropdown options - `recording time 1:09:41`
    - fetching a quote of a selected category - `recording time 1:28:18`

## Fetch using other HTTP methods (POST)
1. JS fetch() request options
2. Setting the fetch options headers (& what is the HTTP request header and body)
3. The HTTP request / response body is a string 
    - Most of the times (but not always), the data is JSON formatted
    - When receiving the response, the body must be parsed using an asynchronous method .json() 
    - When sending the data to an API, the body must be transformed in string, using JSON.stringify()
4. Promises and then() method
5. Making a user authentication request 
6. What is an authentication token
7. DevTools network tab and the request / response
8. Authentication vs Authorization

## Using fetch and then for implementing asynchronous code
1. Chaining fetch() with then() to parse the response 
2. Using then() to use the parsed response body
