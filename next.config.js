/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_ACCESS_TOKEN:
      "[MAPBOX_TOKEN_HERE]",
    API_KEY: process.env.API_KEY,
    authDomain: process.env.authDomain, 
    projectId: process.env.projectId, 
    storageBucket: process.env.storageBucket, 
    messagingSenderId: process.env.messagingSenderId, 
    appId: process.env.appId, 
    measurementId: process.env.measurementId
  }
};