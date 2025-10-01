// IMPORT CUSTOM MODULES
import {readDB, writeDB} from './utils/read_n_write.js'

// IMPORT MODULES
const fs = require('fs')
const express = require('express')
const cors = require('cors')

// SETUP SERVER
const app = express()
const PORT = 3000

// MIDDLEWARE
app.use(
    cors()
)
app.use(
    express.json()
)
app.use(
    (req, res, next) => {
        next()
    }
)

// CRUD OPERATIONS
function untitled_create(req, res) {}
function untitled_read(req, res) {
    const test123 = readDB('./db_a.json')
    res.status(200).send(test123)
}
function untitled_update(req, res) {}
function untitled_delete(req, res) {}

// API ENDPOINTS
app.post('/untitled_add', untitled_create)
app.get('/untitled_show', untitled_read)
app.put('/untitled_edit/:id', untitled_update)
app.delete('/untitled_remove/:id', untitled_delete)

// SERVER
app.listen(PORT)
