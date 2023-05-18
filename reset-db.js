//Import the pg pacage
import pg from "pg"
//Set the database connection srting
const connectionString = process.env.DB_CONNECTION_STRING;
//create a new client to use
const client = new pg.Client({
    connectionString,
})
//conect to data bace

 async function resetDB(){
    await client.connect();

    //send a query
    const result = await client.query(" DROP TABLE IF EXISTS books1;")
    const result1 = await client.query("DROP TABLE IF EXISTS authors2;")
    const result2 = await client.query(" DROP TABLE IF EXISTS banana;")
    const createBooks = await client.query("CREATE TABLE banana(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, color TEXT, size INT );")
    const populareBooks = await client.query("INSERT INTO banana(color,size ) VALUES('purple', '18');")
    console.log(result.rows, result1.rows, populareBooks)

    //close the connection
    await client.end();

 }
 resetDB()


