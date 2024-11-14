const express = require('express')
const app = express()


app.post('/api/v1/:operator', (request, response) => {
    const operator = parseFloat(request.params.operator)
    const num1 = parseFloat(request.query.num1)
    const num2 = parseFloat(request.query.num2)
    const result = 0
    switch (operator) {
        case value = "multiplication":
            result = num1 * num2
            break;

        case value = "division":
            result = num1 / num2
            break;

        case value = "plus":
            result = num1 + num2
            break;

        case value = "minus":
            result = num1 - num2
            break;

        default: throw new Error("Operación no válida")
    }

    response.json(result)
    
})

