# SMU PCMOB4-3: Firebase Chat App

This is a simple chat application built with React Native, Firebase, and `react-native-gifted-chat`. The app features user authentication via Firebase Authentication and real-time messaging using Firebase Firestore.

## Features

- **User Authentication**: Secure login with Firebase Authentication.
- **Real-Time Messaging**: Instant updates and notifications using Firestore.
- **Customizable UI**: Tailored chat interface with customized bubbles and send buttons.

## Technologies

- **React Native**: Framework for building native apps using React.
- **Firebase**: Backend service for authentication and real-time database.
- **react-native-gifted-chat**: A popular chat UI library for React Native.
- **Expo**: Toolkit for building and running React Native apps.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/smu-pcmob4-3-chat.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd smu-pcmob4-3-chat
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Firebase**

    - Create a Firebase project and add your Firebase configuration to `firebaseDB.js`.
    - Replace the placeholders in `firebaseConfig` with your Firebase project credentials.

5. **Run the App**

    ```bash
    npm start
    ```

## Usage

- **Login Screen**: Enter your email and password to access the chat.
- **Chat Screen**: Send and receive messages in real-time.

## File Structure

- `App.js`: Main entry point, sets up navigation.
- `firebaseDB.js`: Configures and initializes Firebase.
- `screens/ChatScreen.js`: Implements chat functionality and UI.
- `screens/LoginScreen.js`: Manages user authentication.
- `styles`: Contains style definitions for various components.

## Contributing

If you wish to contribute to this project, please fork the repository and create a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

