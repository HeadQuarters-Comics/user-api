const Client = require('pg').Client
const db  = new Client({
    user: "user-api",
    password: "hqcapiuser",
    host: "127.0.0.1",
    port: 5432,
    database: "HQC"
})

module.exports = db

// --------- Simple Connection

//db.connect()
//db.query("select * from users").then(results => {
//    const result = results.rows
//    console.table(result)
//}).finally(() => db.end())