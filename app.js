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
const id = 1;
const values = [id];
const query = `SELECT * FROM banana WHERE id = $1;`;
const result = await client.query(query, values)
console.log(result.rows)
//close the connection
await client.end();


