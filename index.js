const fs = require('fs')

const 
    schema = JSON.parse(fs.readFileSync('_schema.json', 'utf8')),
    input = JSON.parse(fs.readFileSync('_input.json', 'utf8'))

const validate = require('jsonschema').validate
const res = validate(input, schema)

console.log(`\x1b[33m`, `\nInput valid with schema:`)
console.log(`${res.valid ? '\x1b[32m' : '\x1b[31m' }`, `\t${res.valid}`)
console.log(`\x1b[0m`, ``)