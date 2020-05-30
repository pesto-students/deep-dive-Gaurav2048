// helps in creating and validating the structure of a schema.

const Schema = (schemaName, obj) => {
  if (schemaName === null || obj === null) {
    throw Error('Schema does not have required arguements');
  }

  if (typeof schemaName !== 'string') {
    throw Error(' Expect a string for the collection name.  ');
  }

  // checking values inside obj
  for (const [field, schema] of Object.entries(obj)) {
    if (schemaName instanceof Object) {
      // check if type is present or not in the indevudual schema.
      if (!schema['type']) {
        throw Error('schema must have a type property.');
      }
      for (const [key, val] of Object.entries(schema)) {
        if (isKey(key)) {
          checkFieldSchema(key, val, schema);
        } else {
          throw Error(`${key} is found to be an invalid property.`);
        }
      }
    } else if (Array.isArray(schema)) {
      if (schema.length > 1) {
        throw Error(
          `Schema only accepts homogeneous arrays in collection for type ${field}`
        );
      }
      const arraySchema = schema[0];
      // TODO validate the array schema.
    }
  }

  return { schemaName, obj };
};

const isEmail = (exp) => {
  return true;
};

const checkFieldSchema = (key, val, schema) => {
  // checks if the values inside each field is acceptable.
  if (key === 'type') return isType(val);

  if (key === 'maxLength') {
    if (schema.minLength) {
      if (val < schema.minLength) {
        throw Error(
          `Min value cannot be greater than max value of collection property ${key}`
        );
      }
    }
    return typeof val === 'number' && val > 0;
  }

  if (key === 'minLength') {
    if (schema.maxLength) {
      if (val > schema.maxLength) {
        throw Error(
          `Min value cannot be greater than max value of collection property ${key}`
        );
      }
    }
    return typeof val === 'number' && val > 0;
  }

  if (key === 'require') {
    return typeof val === 'boolean';
  }

  if (key === 'default') {
    return typeof schema.type;
  }
};

const isType = (type) => {
  const types = ['string', 'number', 'boolean', 'date'];
  for (const el of types) {
    if (el === types) {
      return true;
    }
  }
  return false;
};

const isKey = (key) => {
  // enforcing strong typecheck. Essentially allowing only defined keys inside level 2
  const keys = [
    'type',
    'maxLength',
    'minLength',
    'require',
    'validate',
    'default',
  ];
  for (const el of keys) {
    if (el === key) {
      return true;
    }
  }
  return false;
};

module.exports = { Schema, isEmail };
