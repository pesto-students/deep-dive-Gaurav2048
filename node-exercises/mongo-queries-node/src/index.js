/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/
const { getDb, closeConnection } = require("./database");
const connectionInstance = getDb();
const getMoviesCount = async () => {
  return connectionInstance
    .then((db) => {
      return db.collection("movies").count();
    })
    .catch((err) => {
      throw Error(err);
    });
};
/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .findOne(
          { $and: [{ "imdb.rating": 8.6 }, { year: 1968 }] },
          { projection: { title: 1, _id: 0 } }
        );
    })
    .catch((err) => {
      throw Error(err);
    });
};
/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({
          writers: {
            $all: [
              "Roberto Orci",
              "Alex Kurtzman",
              "Damon Lindelof",
              "Gene Roddenberry",
            ],
          },
        })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};
/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({
          writers: {
            $in: [
              "Roberto Orci",
              "Alex Kurtzman",
              "Damon Lindelof",
              "Gene Roddenberry",
            ],
          },
        })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};
/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({ actors: "Jackie Chan" })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};
/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async () => {};

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({
          $and: [
            { "imdb.rating": { $gte: 9.0 } },
            { "imdb.rating": { $lte: 9.2 } },
          ],
        })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({ rated: { $exists: true, $ne: "UNRATED" } })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async () => {};

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({
          $or: [{ "imdb.rating": { $gte: 9.0 } }, { metacritic: { $gte: 90 } }],
        })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async () => {};

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({ genres: { $all: ["Adventure", "Action"] } })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async () => {
  return connectionInstance
    .then((db) => {
      return db
        .collection("movieDetails")
        .find({ countries: { $size: 4 } })
        .count();
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async () => {
  connectionInstance
    .then((db) => {
      db.collection("movieDetails").updateOne(
        { title: "Iron Man 3" },
        { $set: { myRating: 90 } }
      );
    })
    .catch((err) => {
      throw Error(err);
    });
};

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async () => {
  connectionInstance
    .then((db) => {
      db.collection("movieDetails").updateOne(
        { title: "Gone Girl" },
        { $inc: { metacritic: 5 } }
      );
    })
    .catch((err) => {
      throw Error(err);
    });
};
incrementalUpdate();
module.exports = {
  getMoviesCount,
  movieRating,
  writersIntersection,
  writersUnion,
  actor,
  positionalActor,
  comparisonOperator,
  trimUnrated,
  unratedByTomato,
  goodMovies,
  regexSearch,
  arrayAll,
  fieldArraySize,
  addField,
  incrementalUpdate,
};
