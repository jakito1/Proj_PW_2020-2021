const config = require('../dbconfig');
const sql = require('mssql');

async function loadCategories(){
    try{
        let pool = await sql.connect(config);
        let categories = await pool.request().query('select * from Categories');
        console.log(categories);
        return categories.recordsets;
    }catch(err){
        console.log(err);
    }
}
async function checkEmail(email){
    try {
        let pool = await sql.connect(config);
        let command = "select count(*) from Accounts where AEmail = '" + email + "'";
        let ammount =  await pool.request()
            .query(command);
        if(ammount === 0){
            return false;
        }else{
            return true
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function getPassword(email){
    try {
        let pool = await sql.connect(config);
        let command = "select APassword from Accounts where AEmail = '" + email + "'";
        let password = await pool.request()
        .query(command);
        return password.recordset;
    }
    catch (err) {
        console.log(err);
    }
}

async function getUser(email){
    try {
        let pool = await sql.connect(config);
        let command = `select * from Accounts where AEmail = '${email}'`;
        let user = await pool.request()
        .query(command);
        return user.recordset;
    }
    catch (err) {
        console.log(err);
    }
}

async function createUser(user){
    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('email', sql.VarChar, user.email)
            .input('password', sql.VarChar, user.password)
            .input('username', sql.VarChar, user.username)
            .execute('Registar');
            return insertUser.recordset;
    }
    catch (err) {
        console.log(err);
    }
}

async function getPosts(){
    try{
        let pool = await sql.connect(config);
        let categories = await pool.request().query('select * from Posts');
        return categories.recordsets;
    }catch(err){
        console.log(err);
    }
}

async function insertPost(post){
    try{
        let pool = await sql.connect(config);
        console.log(post.category);
        let getCategoryName = await pool.request().query(`select CategoryID as catgExists from Categories where CategoryName = '${post.category}';`);
        if(JSON.stringify(getCategoryName.recordsets).match(/\d+/) === null){
            console.dir('Data not Inserted!');
        }else{
            let catgID = JSON.stringify(getCategoryName.recordsets).match(/\d+/)[0];
            let insertPost = await pool.request().query("insert into Posts(PCategoryID, PUserID, PTitle, PCommentID, PReactionID, upvotes, downvotes) values('" + catgID + "',2,'" + post.title + "',null,null,0,0);");
            console.dir('Data inserted successfully!');
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {loadCategories, createUser, checkEmail, getPassword, getUser,
getPosts}