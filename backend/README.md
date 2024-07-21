# Real-time Stock/Crypto Tracker

`This project is a real-time stock/crypto tracker application built with React, Redux, TypeScript, and Material-UI for the frontend. The backend is built with Express.js and MongoDB for storing and retrieving real-time data of selected stocks or cryptocurrencies.`

## Features

- Poll real-time data every few seconds for predefined stocks or crypto (e.g., Bitcoin, Ethereum).
- Store data in a MongoDB database.
- Display the most recent 20 real-time data entries in a dynamic table that updates in real-time.
- Modal/popup to change the selected stock or crypto using a dropdown with predefined options.
- Attractive UI design using Material-UI components.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- An API key for the CoinGecko API (or another API of your choice)

## Installation

### Backend

1. Navigate to the `backend` directory:

```bash
cd backend

```

Install the backend dependencies:

npm install

Create a .env file in the backend directory and add your MongoDB connection string and API URL:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/stockCryptoDB
COINGECKO_API_URL=https://api.coingecko.com/api/v3/simple/price

Start the backend server:
npm start

The backend server should now be running on http://localhost:5000.

Frontend

Navigate to the frontend directory:

cd frontend

Install the frontend dependencies:

npm install

Start the frontend application:

npm start

The frontend application should now be running on http://localhost:3000.

Usage

Open your browser and navigate to http://localhost:3000.

The application will display real-time data for the selected stock or cryptocurrency.
Use the "Change Symbol" button to open the modal and select a different stock or crypto.
The table will automatically update every few seconds with the latest data.

This README file provides all necessary instructions on how to set up and run the project, including the required environment variables and the project structure.
