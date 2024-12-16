# Chaty 💬

**Chaty** is a decentralized chat application that enables users to create chat rooms and interact with others in real-time. This lightweight, privacy-first app ensures that no chat data is stored permanently. All conversations are ephemeral and are lost when the page refreshes, making it perfect for transient, secure communication.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tools and Technologies](#tools-and-technologies)
- [Future Enhancements](#future-enhancements)

---

## Overview

Chaty provides a minimalistic and decentralized platform for real-time communication. Users can quickly create or join a chat room using a unique Room ID. All chats within a room are peer-to-peer, ensuring privacy and data security. The application does not store any data on the server, and all messages disappear upon a page refresh.

---

## Features

- **Decentralized Communication**  
  Messages are not stored on any server, ensuring complete privacy.

- **Ephemeral Chats**  
  Chats are destroyed as soon as the page is refreshed or closed.

- **Room-based Interaction**  
  Users can create or join chat rooms with unique Room IDs.

- **Real-time Messaging**  
  Instantly exchange messages with other users in the same chat room.

---

## Installation

Follow these steps to set up Chaty on your local machine:

### Backend

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the Backend Server**:
   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm start
   ```

4. **Access the Application**:  
   Open your browser and go to `http://localhost:3000` to start using Chaty.

---

## Usage

1. **Create a Room**  
   - Navigate to the dashboard and create a new chat room by generating a unique Room ID.

2. **Share the Room ID**  
   - Share the Room ID with others to invite them to join your chat room.

3. **Start Chatting**  
   - Enter the chat room and start sending messages in real-time.

4. **Refresh or Exit**  
   - Messages will automatically disappear upon refreshing the page or leaving the room.

---

## Tools and Technologies

- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js and WebSocket for real-time communication.
- **Styling**: Tailwind CSS for modern, responsive design.
- **Package Manager**: npm for dependency management.

---

## Future Enhancements

- **Encryption**: End-to-end encryption for enhanced security.
- **File Sharing**: Support for sharing files within the chat rooms.
- **User Avatars**: Allow users to set display names and avatars.
- **Persistent Room IDs**: Option to save Room IDs locally for ease of rejoining.
- **Mobile Optimization**: Improve user experience on mobile devices.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this application as needed.

---

## Acknowledgments

Special thanks to the open-source community for providing the tools and libraries that made this project possible.
