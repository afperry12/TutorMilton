/* eslint-disable */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
const cors = require('cors')({origin: true});

// import * as cors from 'cors';
// import * as bodyParser from 'body-parser';
// import * as Datetime from 'react-datetime';

admin.initializeApp();

const app = express();
app.use(decodeIDToken);

app.use(cors);

// app.get('**', (req, res) => {
//     cors(req, res, () => {
//         // Your App Here
  
//         // Send response
//         res.status(200).send();
//       });
//   });

// app.get('/', async (req, res) => {
//     const snapshot = await admin.firestore().collection('users').get();
//     const users:any = [];
//     snapshot.forEach((doc) => {
//         const id = doc.id;
//         const data = doc.data;

//         users.push({ id, ...data });
//     });

//     res.status(200).send(JSON.stringify(users));
// });

// app.get('/:id', async (req, res) => {
//     const snapshot = await admin.firestore().collection('users').doc(req.params.id).get();
    
//     const userId = snapshot.id;
//     const userData = snapshot.data;
//     res.status(200).send(JSON.stringify({ id: userId, ...userData }));
// });

app.get('/:id', async (req, res) => {
    // await admin.firestore().collection("users").where("id", "==", req.params.id)
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         var start = doc.get("start");
    //         var end = doc.get("end");
    //         var title = doc.get("title");
    //         let dataa = {start, end, title};
    //         res.status(200).send(JSON.stringify({ id: doc.id, ...dataa }));
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    await admin.firestore().collection("users").where("id", "==", req.params.id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var start = doc.get("start");
            var end = doc.get("end");
            var title = doc.get("title");
            let dataa = {start, end, title};
            res.status(200).send(JSON.stringify({ id: doc.id, ...dataa }));
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    // const snapshot = await admin.firestore().collection('users').doc(req.params.id).get();
    // const userId = snapshot.id;
    
    // const userData = snapshot.data;
});

app.post('/', async (req, res) => {
    const user = req.body;

    await admin.firestore().collection('users').add(user);

    res.status(201).send();
});

app.put('/create-event', async (req:any, res) => {
    const user = req['currentUser'];

    if (!user) {
    res.status(403).send('You must be logged in!');
    }
});

app.put('/:id', async (req, res) => {
    const body = req.body;

    await admin.firestore().collection('users').doc(req.params.id).update(body);

    res.status(200).send();
});

app.delete('/:id', async (req, res) => {
    await admin.firestore().collection('users').doc(req.params.id).delete();

    res.status(200).send();
});

exports.user = functions.https.onRequest(app);

// exports.userUpdate = functions.https.onRequest(
//         app.put('/:id', async (req, res) => {
//         const body = req.body;
//         await admin.firestore().collection('users').doc(req.params.id).update(body);
//         res.status(200).send();
//     }));


// exports.helloWorld = functions.https.onRequest((req, res) => {
//     res.send('hello');
// });

async function decodeIDToken(req: any, res: any, next: any) {
if (req.headers?.authorization?.startsWith('Bearer ')) {
      const idToken = req.headers.authorization.split('Bearer ')[1];
        try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req['currentUser'] = decodedToken;
      } catch (err) {
        console.log(err);
      }
    }
    next();
  }

// admin.initializeApp(functions.config().firebase);

// const app=express()
// const main=express()

// main.use('/Myapi',app)
// main.use(bodyParser.json())
// main.use(bodyParser.urlencoded({extended:false}))

// const db=admin.firestore()
// export const webApi=functions.https.onRequest(main)

// interface User
// {
//     userEmail:String,
//     gradYear:Number,
//     createDate:Date,
//     displayName:String,
//     calendarEvents:[Datetime, Datetime, String],
//     isTutor:Boolean,
//     dorm:String,
//     cellPhone:Number
// }

// app.post('/addUser', async(req,res)=>{
//     const user:User={
//          userEmail: req.get("email");
//     }
// })


const db = admin.firestore;

exports.createUser = functions.auth.user().onCreate(async (user) => {
    const gradYear = user.email?.split('@')[0]
        .substr(user.email?.split('@')[0].length - 2);
    // if(!isNaN(gradYear)){

    // }
    const newUser = {
        email: user.email,
        gradYear: gradYear,
        createDate: db.FieldValue.serverTimestamp(),
        displayName: user.displayName,
        freePeriods: [String, String, String],
        isTutor: false,
        isTutee: false,
        dorm: '',
        cellPhone: '',
    };

    const userRef = db().collection('users');

    await userRef.doc(String(user.uid)).set(newUser);
});

export const addTutor = functions.https.onRequest(
    async (req: any, res: any) => {
        const newTutor = {
            available: true,
            subjectsToTutor: [],
        };

        const userRef = db().collection('tutors');

        userRef.doc(String(req.body.uid)).set(newTutor).then(() => {
            res.status(200).json({
                result: 'success',
                tuteeInfo: newTutor,
            });
        }
        ).catch((error: any) => {
            res.status(200).json({
                result: 'error: could not set document',
                error: error,
            });
        }
        );
    });

// export const addTutee = functions.https.onRequest(
//     async (req: any, res: any) => {
//         const newTutee = {
//             requestPending: false,
//             subjectsNeeded: [],
//         };

//         const userRef = db().collection('tutees');

//         userRef.doc(String(req.body.uid)).set(newTutee).then(() => {
//             res.status(200).json({
//                 result: 'success',
//                 tuteeInfo: newTutee,
//             });
//         }
//         ).catch((error: any) => {
//             res.status(200).json({
//                 result: 'error: could not set document',
//                 error: error,
//             });
//         }
//         );
//     });