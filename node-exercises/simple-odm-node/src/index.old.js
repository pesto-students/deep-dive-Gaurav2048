// const { ObjectID } = require('mongodb');
// const { getDb, closeConnection } = require('./Database');
// const connectionInstance = getDb();

/***
 *
 * inserting record in doc
 *
 */

// connectionInstance
//   .then((db) => {
//     db.collection('test')
//       .insert({ data: 'okay' })
//       .then((data) => {
//         console.log(data);
//       });
//   })
//   .catch((err) => {});

/**
 *
 * find in doc
 *
 */

// connectionInstance
//   .then((db) => {
//     console.log('db');

//     db.collection('test')
//       .find({})
//       .toArray()
//       .then((err, docs) => {
//         console.log(err);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// connectionInstance
//   .then((db) => {
//     console.log('db');

//     db.collection('test')
//       .findOne({ _id: ObjectID('5ece84957f4e791019d65f81') })
//       .then((err, docs) => {
//         console.log(err);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/***
 *
 * count
 *
 */

// connectionInstance
//   .then((db) => {
//     console.log('db');

//     db.collection('test')
//       .count({ data: 'okay' })
//       .then((err, docs) => {
//         console.log(err);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// connectionInstance
//   .then((db) => {
//     console.log('db');

//     db.collection('test')
//       .distinct('data')
//       .then((err, docs) => {
//         console.log(err);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
