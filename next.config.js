/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_ACCESS_TOKEN:
      "[MAPBOX_TOKEN_HERE]",
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN, 
    PROJECT_ID: process.env.PROJECT_ID, 
    STORAGE_ID: process.env.STORAGE_ID, 
    MESSAGING_ID: process.env.MESSAGING_ID, 
    APP_ID: process.env.APP_ID, 
    MEASUREMENT_ID: process.env.MEASUREMENT_ID
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};