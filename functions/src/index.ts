// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const db = admin.firestore()

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  })
