const database = require('../../db')
const crypto = require('../services/crypto')

module.exports = {
    async index(req, res) {
        try{
            await database.connect()
            const result = await (await db.query("select * from users")).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get all users! ${error}`)
        }
    },
    
    async create(req, res) {
        const {username, password} = req.body;

        let data = {};

        await database.connect()

        let user = await(await database.query(`select username, password from users where username = '${username}'`)).rows
        console.log(user.length)
        if(user.length <= 0) {
            data = {id: `user-${crypto.encrypt(username)}`, username, password: crypto.encrypt(password)};
            try{
                await database.query('insert into users("id_user", "username", "password") values ('+"'"+data.id+"', '"+data.username+"', '"+data.password+"');")
                return res.status(200).json(data)
            }
            catch(error){
                console.log(`Error to create a new user! ${error}`)
                return res.status(500)
            }
        }else {
            return res.status(409).json(`User ${username} already exists`)
        }
    },

    async get(req, res) {
        const {username} = req.params
        console.log(req)
        try{
            await database.connect()
            const result = await(await database.query(`select username, password from users where username = '${username}'`)).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get all users! ${error}`)
            return res.status(500)
        }
    },

}