const express = require('express')
const app = express()


app.post('/api/v1/result/:num1/:num2/:operator', (request, response) => {
    const operator = (request.params.operator).toString
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
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

