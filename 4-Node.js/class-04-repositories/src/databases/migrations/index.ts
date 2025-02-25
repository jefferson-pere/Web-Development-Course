import { sqliteConnection } from "..";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
  const schemas = [tableUsers].join(""); // t1, t2...
  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}
