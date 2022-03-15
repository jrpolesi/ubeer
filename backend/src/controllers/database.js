import FilesControllers from "./files.js";

class DatabaseControllers {
  static getByEmail(collection, email) {
    const db = FilesControllers.read();

    const list = db[collection].find((each) => (each.email = email));

    return list;
  }

  static getById(collection, id) {
    const db = FilesControllers.read();

    const list = db[collection].find((each) => (each.id = id));

    return list;
  }

  static getAll(collection) {
    let db = FilesControllers.read();

    return db[collection];
  }

  static createOne(collection, data) {
    const db = FilesControllers.read();
    db[collection].push(data);
    FilesControllers.write(db);
    return data;
  }

  static updateOne(collection, idToUpdate, data) {
    const db = FilesControllers.read();

    let updated;

    const updatedCollection = db[collection].map((each) => {
      if (each.id === idToUpdate) {
        updated = {
          ...each,
          ...data,
        };
        return updated;
      } else {
        return each;
      }
    });

    db[collection] = updatedCollection;

    FilesControllers.write(db);
    return updated;
  }

  static deleteOne(collection, id) {
    const db = FilesControllers.read();

    const filteredDb = db[collection].filter((each) => each.id !== id);

    if (filteredDb.length < db[collection].length) {
      db[collection] = filteredDb;

      FilesControllers.write(db);
      return true;
    } else {
      return false;
    }
  }
}

export default DatabaseControllers;
