const Client = require('pg').Client
const db  = new Client({
    user: "user-api",
    password: "hqcapiuser",
    host: "127.0.0.1",
    port: 5432,
    database: "HQC"
})

// --------- Simple Connection

//db.connect()
//db.query("select * from users").then(results => {
//    const result = results.rows
//    console.table(result)
//}).finally(() => db.end())

async function getUsers() {
    try{
        console.log("Starting connection...")
        await db.connect()
        console.log("Success to connect!")
        const result = await (await db.query("select * from users")).rows
        console.table(result)
    }
    catch{
        console.log("Error to getUsers! Erro" + ex)
    }
    finally{
        await db.end()
        console.log("Finish connection to db")
    }
}

getUsers()