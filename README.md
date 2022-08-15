# JiujitBits

## Jiujistu Social Media Backend

## Description

JiujitBits is a backend api that allows the user to utalize GET/PUT/DELETE routes for a social media site for Jiujitsu practioners.

## Useage

Friends Routes
```
Friends
(Delete): '/:userId/friends/:friendId'
(Post): '/:userId/friends/:friendId'
```
```
Users
(Post):  '/api/users' 
{
	"username": "testingFriends",
	"email": "testingFriends@something.bet"
}
(GET): find all Users '/api/users'
(GET): find user by id '/api/users/:userId'
(DEL): delete user '/api/users/:userId'
```
```
Thoughts
(POST): '/api/thoughts/'
  {
    "thoughtText": "landoverlub",
    "username": "myfauxuser",
		"email": "faux@something.bet"
  }
(GET): get user by id "/api/thoughts/:thoughtId"
(GET): get all thoughts "/api/thoughts/"
```
## Features

With this API, you can do most basic things a social media site would need, create users, create posts, and create comments (called reactions).

## Dependencies

all the dependencies are avaliable for instalation through npm. Simply write ```npm i``` into your console and all the relevent packages are installed.

