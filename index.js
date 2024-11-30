const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    response.json({
        available: "App is ready",
        status: "ok"
    })
})

app.post('/api/v1/result/:num1/:num2/:operator', (req, res) => {
    const { num1, num2, operator } = req.params;

    operator.toString
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        return res.status(400).json({ error: 'Los parámetros numéricos deben ser válidos.' });
    }

    let result;

    switch (operator) {
        case "multiplication":
            result = parsedNum1 * parsedNum2;
            break;
        case "division":
            if (parsedNum2 === 0) {
                return res.status(400).json({ error: 'Is not posible divide by cero.' });
            }
            result = parsedNum1 / parsedNum2;
            break;
        case "plus":
            result = parsedNum1 + parsedNum2;
            break;
        case "minus":
            result = parsedNum1 - parsedNum2;
            break;
        default:
            return res.status(400).json({ error: 'Unknown operator. Use: multiplication, division, plus o minus.' });
    }

    return res.status(200).json({ result: result });
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
