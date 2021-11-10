const database = require('../../db')

module.exports = {
    async getAllUsers() {
        try{
            await database.connect()
            const result = await (await db.query("select * from users")).rows
            console.table(result)
        }
        catch(error){
            console.log(`Error to get all users! Error: ${error}`)
        }
        finally{
            await database.end()
        }
    },
    
    async createUsers(id, username, password) {
        try{
            await database.connect()
            await database.query('insert into users("id_user", "username", "password") values ('+"'"+id+"', '"+username+"', '"+password+"');")
        }
        catch(error){
            console.log(`Error to create a new user! Error: ${error}`)
        }
        finally{
            await database.end()
        }
    }
}