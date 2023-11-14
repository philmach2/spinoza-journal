const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let db,
dbConnectionStr = process.env.DB_STRING,
dbName = 'spinoza-journal'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        entriesCollection = db.collection('entries')
}) 

app.get('/', (req, res) => {
    db.collection('entries')
        .find()
        .toArray()
        .then(results => {
            res.render('index.ejs', { entries : results })
        })
        .catch(error => console.log(error))
})

app.post('/entries', (req, res) => {
    entriesCollection
        .insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
})

app.put('/entries', (req, res) => {
    entriesCollection
        .findOneAndUpdate({ inspiration: 'What inspired me today?' }, 
            {
                $set: {
                    inspiration: req.body.inspiration,
                    happiness: req.body.happiness,
                    comfort: req.body.comfort,
                },
            }, 
            {
                upsert: true,
            }
        )
        .then(result => {
            res.json('Success')
        })
        .catch(error => console.error(error))
})

app.delete('/entries', (req, res) => {
    
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port 3000`)
})