// require('dotenv').config(); This is not needed if you are using ES6 modules
import dotenv from "dotenv"; // This is needed if you are using ES6 modules

import mongoose from 'mongoose';
import connectDB from './db/index.js';

dotenv.config()

connectDB();

// First Approach
// import express from 'express';
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on('error', (error) => {
//       console.log('ERROR: ', error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log('ERROR : ', error);
//     throw error;
//   }
// })();
