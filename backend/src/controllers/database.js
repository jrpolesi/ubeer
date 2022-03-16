import FilesControllers from "./files.js";

class DatabaseControllers {
  static getByEmail(collection, email) {
    const db = FilesControllers.read();

    const item = db[collection].find((each) => each.email === email);

    return item;
  }

  static getById(collection, id) {
    const db = FilesControllers.read();

    const item = db[collection].find((each) => each.id === id);

    return item;
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

  static getRandomItem(collection) {
    const db = FilesControllers.read();

    const randomIndex = Math.floor(Math.random() * db[collection].length);
    const randomItem = db[collection][randomIndex];

    return randomItem;
  }
}

export default DatabaseControllers;
