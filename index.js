const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}





app.get('/', (request, response) => {
    response.json({
        availavle: "App is easy",
        status: "ok"
    })
})

app.post('/api/v1/result/:num1/:num2/:operator', (request, response) => {
    const operator = (request.params.operator).toString
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    let result = 0
    switch (operator) {
        case "multiplication":
            result = num1 * num2
            return res.status(200).json(result);

        case "division":
            result = num1 / num2
            return res.status(200).json(result);

        case "plus":
            result = num1 + num2
            return res.status(200).json(result);

        case "minus":
            result = num1 - num2
            return res.status(200).json(result);

        default: unknownEndpoint
    }

    

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
