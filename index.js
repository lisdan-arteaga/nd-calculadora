const express = require('express')
const app = express()


app.post('/api/v1/multiplication', (request, response) => {
    const num1 = request.query.num1
    const num2 = request.query.num2
    const result = num1 * num2
    response.json(result)
})

app.post('/api/v1/division', (request, response) => {
    const num1 = request.query.num1
    const num2 = request.query.num2
    const result = num1 / num2
    response.json(result)
})

app.post('/api/v1/plus', (request, response) => {
    const num1 = request.query.num1
    const num2 = request.query.num2
    const result = num1 + num2
    response.json(result)
})

app.post('/api/v1/minus', (request, response) => {
    const num1 = request.query.num1
    const num2 = request.query.num2
    const result = num1 - num2
    response.json(result)
})
