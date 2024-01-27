# React Native ToDo List App

## Overview
This is a ToDo list app built with React Native using Expo. The app allows users to create ToDo lists, sort them by categories, customize the color of each list, and save all the data in Firestore (Firebase).

## Features
- **Category Sorting:** Users can categorize their ToDo lists for better organization.
- **Customizable Colors:** Each ToDo list can be customized with a color of the user's choice.
- **Data Storage:** All ToDo lists and their data are stored in Firestore, providing real-time synchronization across devices.

## Technologies Used
- React Native
- Expo
- Firebase Firestore

## Installation
1. Clone the repository:
```bash
$ git clone https://github.com/Ragde54/To-do-app-React-Native-Firebase-
```
2. Navigate to the project directory:

```bash
$ cd react-native-todo-list
```
3. Install dependencies:
```bash
$ npm install
```

4. Set up Firebase Firestore:
- Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
- Enable Firestore as the database for your project.
- Obtain your Firebase project configuration settings.
- Add the Firebase configuration to your Expo project.

6. Run the app:
```bash
npx expo start
```
## Usage
1. Launch the app on your device or simulator.
2. Create a new ToDo list by tapping the "+" button.
3. Enter a title for the list and select a category.
4. Customize the color of the list using the color picker.
5. Add tasks to the list by tapping the "Add Task" button.
6. Mark tasks as completed by tapping the checkbox.
7. Delete tasks by swiping left on them.
8. Data is automatically saved and synchronized with Firestore.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
