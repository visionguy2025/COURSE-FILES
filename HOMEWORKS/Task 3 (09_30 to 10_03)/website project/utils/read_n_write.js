// IMPORT MODULES
const fs = require('fs')

// READ DATABASE FILE | JSON
export function readDB(filename) {
    const data = JSON.parse(fs.readFileSync(filename, 'utf-8'))
    return data
}

// WRITE DATABASE FILE | JSON
export function writeDB(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4))
}
