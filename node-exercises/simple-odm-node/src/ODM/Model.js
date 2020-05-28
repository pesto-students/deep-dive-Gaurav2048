// above a precreated schema it will provide the
// data base access utilties and methods
const { ObjectID } = require('mongodb');
const { getDb, closeConnection } = require('./Database');
const connectionInstance = getDb();

const Model = (schema) => {
  const create = (obj) => {
    if (validateObjectWithSchema(obj, schema.obj)) {
      return connectionInstance
        .then((db) => {
          return db.collection(schema.schemaName).insert(obj);
        })
        .catch((err) => {
          throw Error(err);
        });
    }
  };

  const find = (obj) => {};

  const findOne = (obj) => {};

  return { create };
};

const validateObjectWithSchema = (obj, schema) => {
  for (const [field, sch] of Object.entries(schema)) {
    const param = obj[field];
    if (param === undefined && sch.require) {
      throw Error(
        `The parameters does not have a required field named ${field}`
      );
    }

    if (param !== undefined) {
      if (sch.type === 'Array' && !Array.isArray(param)) {
        throw Error(`The type of ${field} does not match schema.`);
      } else if (typeof param !== sch.type) {
        throw Error(`The type of ${field} does not match schema.`);
      }
      if (sch.maxLength !== null && param.length > sch.maxLength) {
        throw Error(`Max length exceeds for field ${field}`);
      }
      if (sch.minLength !== null && param.length < sch.minLength) {
        throw Error(`Min length exceeds for field ${field}`);
      }
    }
  }
  return true;
};

module.exports = { Model };
