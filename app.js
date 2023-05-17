//Import the pg pacage
import pg from "pg"
//Set the database connection srting
const connectionString = process.env.DB_CONNECTION_STRING;
//create a new client to use
const client = new pg.Client({
    connectionString,
})
//conect to data bace
await client.connect();
//send a query
const result = await client.query("SELECT * FROM books1;")
console.log(result.rows)
//close the connection
await client.end();


