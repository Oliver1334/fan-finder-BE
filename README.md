# Fan Finder - Backend API

Fan Finder is a RESTful API built to support a location-based social networking mobile app for live music enthusiasts. This backend handles user authentication, gig data management, forum functionality, and real-time chat features.

**[View the frontend repository](https://github.com/Oliver1334/fanfinder-fe)** | **[Watch the video demo](https://www.youtube.com/watch?v=N_lc2a5umbo&ab_channel=Northcoders)** 

This project was developed as part of a team of four during the **Northcoders Full-Stack Software Developer Bootcamp**, showcasing backend development skills including API design, database management, and test-driven development.

## Features

- RESTful API endpoints for gig data, user management, and forums
- MongoDB database integration for persistent data storage
- Real-time chat functionality using Socket.io
- Comprehensive test coverage using TDD methodology
- User authentication and authorization

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library

## Live API

A deployed version of this API is available at:

**https://fan-finder-be.onrender.com/api**

Note: The API is hosted on Render's free tier and may take a moment to wake up on first request.

## Local Installation & Setup

### Prerequisites

- Node.js (minimum version 19.5.0)
- MongoDB (minimum version 5.1.0)
- MongoDB Atlas account (for cloud database)

### Steps

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/fanfinder-be
```

2. Navigate to the project directory:
```bash
cd fanfinder-be
```

3. Install dependencies:
```bash
npm install
```

4. Set up MongoDB Atlas:
   - Sign up for a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas)
   - Create a new project and cluster
   - Click "Connect" to get your connection string
   - Whitelist your IP address in "Network Access"

5. Create a `.env.development` file in the project root:
```
DEVELOPMENT_DB="YOUR_MONGODB_CONNECTION_STRING_HERE"
```

Ensure `.env.development` is listed in `.gitignore`

6. Seed the development and test databases:
```bash
npm run seed
```

7. Run the test suite:
```bash
npm install -D jest jest-sorted supertest
npm test
```

8. Start the development server:
```bash
npm start
```

## API Endpoints

Documentation for all available endpoints can be found at `/api` when running the server.

## Development Approach

This backend was built using:
- Test-Driven Development (TDD) with Jest and Supertest
- RESTful API design principles
- Agile methodologies (Kanban, daily stand-ups)
- Pair programming and collaborative development
- Software Development Lifecycle framework

## Team

Developed by Team Express during Northcoders bootcamp. Original backend repository maintained here: [Fan Finder Backend](https://github.com/Oliver1334/fanfinder-fe)
