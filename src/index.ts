
import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client("")

await pgClient.connect();


app.post("/signup", async (req, res) => {
    const username = "test_suer__!";
    const email = "ksjnfjn@gmail.com";
    const password = "fnght";

    try {

        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have signed up"
        })
    } catch(e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        })
    }

})

app.listen(3000)




// import { Client } from "pg";
// const pgClient = new Client({
//     connectionString:"postgresql://neondb_owner:npg_5BYUjzmElH8s@ep-ancient-mountain-ah98mymp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
//     ssl:{
//         rejectUnauthorized:false
//     }
// })

// async function main_pg() {
//     await pgClient.connect()
//     const data = await pgClient.query("SELECT * FROM users")
//     console.log(data.rows)
// }

// main_pg()
