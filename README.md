# Exercise 8 Data Persistence

### Author: Alcantara, Mark Henry S.
### Student Number: 2021-06557
### Section: B6L

## App Description: 
    Application that connects to a firebase database and authenticate user.

## Things done in the code: 
   User authentication

## Challenges when developing the exercise: 
    Following the procedure on how to implement authentication, though this becomes much easier than the first time I use firebase.


# Simple Todo App using Firebase

The todo app connects to firebase cloud firestore and authentication. It uses a provider for state management

## Folder Structure
```
lib
├───api
│   └───firebase_auth_api.dart*
│   └───firebase_todo_api.dart
├───models
│   └───todo_model.dart
├───providers
│   └───todo_provider.dart
│   └───auth_provider.dart*
├───screens
│   ├───modal_todo.dart
│   └───todo_page.dart
│   └───login.dart*
│   └───signup.dart*
└───main.dart
```

* Models - contains the data model used
* Providers - contains the Todo provider that contains the data and method logic
* Screens - contains the screen/widgets used