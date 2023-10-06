const pool = require("../config");
const fs = require("fs");

const seedQuery = fs.readFileSync("app/database/seeding.sql", {
  encoding: "utf8",
});
pool.query(seedQuery, (error, result) => {
  console.log(error);
  console.log("Seeding completed!");
  pool.end();
});
