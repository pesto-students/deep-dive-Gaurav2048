const { Model } = require('./ODM/Model');
const demoSchema = require('./Model');

const demoModel = Model(demoSchema);

demoModel
  .create({
    name: 'Test Name',
    likes: 3,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {});
