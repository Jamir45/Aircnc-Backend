const admin = require("firebase-admin");
const serviceAccount = require("./aircnc-944b7-firebase-adminsdk-it4t1-dc9ddfd59d.json");
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});



module.exports.requireLogin = (req, res, next) => {

   const {authorization} = req.headers
   if(!authorization){
      return res.status(401).send({error:"You are not sing in user"})
   }
   admin.auth().verifyIdToken(authorization)
   .then((decodedToken) => {
      loggedInUser = decodedToken
      next()
   })
   .catch((error) => {
      res.status(401).send({error:"You are not sing in user"})
   });
}