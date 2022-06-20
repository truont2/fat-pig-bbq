import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from '../../../firebase.config'
import * as firestoreFunctions from 'firebase/firestore'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: {  label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     console.log(credentials, "signed in user");
    //     const user = { id: 1, name: credentials, email: req.email }
        
    //     if (user) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       return user
    //     } else {
    //       // If you return null then an error will be displayed advising the user to check their details.
    //       return null
  
    //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //     }
    //   }
    // })
  ],
  secret: process.env.SECRET,
  session: { 
    // strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
//   session: {
//     // Choose how you want to save the user session.
//     // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
//     // If you use an `adapter` however, we default it to `"database"` instead.
//     // You can still force a JWT session by explicitly defining `"jwt"`.
//     // When using `"database"`, the session cookie will only contain a `sessionToken` value,
//     // which is used to look up the session in the database.
//     strategy: "database",
  
//     // Seconds - How long until an idle session expires and is no longer valid.
//     maxAge: 30 * 24 * 60 * 60, // 30 days
  
//     // Seconds - Throttle how frequently to write to database to extend a session.
//     // Use it to limit write operations. Set to 0 to always update the database.
//     // Note: This option is ignored if using JSON Web Tokens
//     updateAge: 24 * 60 * 60, // 24 hours
//   },
//   destructure all the firebase functions
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),
})