import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBXAZxCPcFaMRxQPNkKCfrRhyEKOt2hZ_s",
  authDomain: "expensify-d6b77.firebaseapp.com",
  databaseURL: "https://expensify-d6b77.firebaseio.com",
  projectId: "expensify-d6b77",
  storageBucket: "expensify-d6b77.appspot.com",
  messagingSenderId: "70856565561",
  appId: "1:70856565561:web:9ad08e7556ac7f871efee8",
  measurementId: "G-VPMG60343W"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (a,b) => {
//   console.log(a.val());
//   console.log(b);
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value',(snapshot) => {
//   const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
// })

// setTimeout(() =>{
//   database.ref('expenses/-M2a4VkWjd5jSZH9yCQI').update({
//     amount: 1002
//   });
// },3000);


// database.ref('expenses').push({
//   description: 'some description 1',
//   note: 'some notes 1',
//   amount: 100,
//   createdAt: 1000
// });




// database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const title = snapshot.val().job.title;
//   const company = snapshot.val().job.company;

//   console.log( name, ' is a ', title , ' at ' , company);
// }, (e) => {
//   console.log('Something went wrong: ', e)
// });



// database.ref('location/city')
//   .once('value')
//   .then((snapshot)=>{
//     console.log(snapshot.val());
//   }).catch((e) => {
//     console.log('Error Fetching Data',e);
//   });



// database.ref().set({
//   name: 'Simon Qu',
//   age: 34,
//   stressLevel: 6,
//   job: {
//     title: 'SD',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Cary',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error)=>{
//   console.log('This failed:', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });


// database.ref('attributes/height').remove().then(()=>{
//   console.log('Removed!');
// }).catch((e) => {
//   console.log('Failed removing:', e)
// })
