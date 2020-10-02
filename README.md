# Build a REST API with Node JS and Express

![REST API](https://i.ibb.co/7GWCCbp/Screenshot-2020-07-12-at-08-30-32.png)

# Introduction
Type npm install in console

Then Type npm start

Runs on http://localhost:5000

*There will be two Users already hard coded for examples and placeholders*

## To Get all Users
URL is http://localhost:5000/users or Get Request to that

## To Add A User
Post Request a JSON object
below is example
{
    "firstName": "Shawn",
    "lastName": "Bigbie",
    "age": 25
}

can see the updated users by sending another Get request,
all new and real users will have a Id created with them.

## To Update A User
Patch Request with JSON data and the URL of the User 
http://localhost:5000/users/Id
replace the Id with the user you want to delete.

below is example
{
    "firstName": "UpdatedName",
}

## To Delete A User
Delete Request with the User URL
http://localhost:5000/users/Id
replace the Id with the user you want to delete.
