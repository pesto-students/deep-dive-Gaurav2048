const { Schema, isEmail } = require('./ODM/Schema');

// type string, number, boolean , date , Array
// minimum requirement for every schema to be valid is type.

const demoSchema = Schema('Blog', {
  name: {
    type: 'string',
    maxLength: 16,
    require: true,
    validate: {
      isEmail: isEmail,
    },
  },
  likes: {
    type: 'number',
    default: 0,
  },
  review: [
    {
      id: {
        unique: true,
        type: 'string',
        require: true,
      },
      name: {
        type: 'string',
        require: true,
      },
      image: {
        type: 'string',
        require: true,
      },
    },
  ],
});

module.exports = demoSchema;
