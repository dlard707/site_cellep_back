const {Pool} = require('pg')

const client = new Pool({
    connectionString:process.env.DATABASE_URL || 'postgres://fhpijeuvnaublf:a2fd98ff0a9ff4e153287d41706252794168de4bd0dc540ce53a3ee960f04fb1@ec2-3-89-214-80.compute-1.amazonaws.com:5432/d58het7fpkl234',
    ssl: {
        rejectUnauthorized:false
    }
})


// teste de conexão



// async function connectTeste(){
//     const res = await client.query('SELECT $1::text as message', ['Hello world!'], (err, result) => {
//         console.log(result.rows[0].message)
//     })
// }

// connectTeste()

module.exports = client