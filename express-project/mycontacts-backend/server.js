const express = require('express')
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

const app = express()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})



/*app.get('/api/contacts', (req, res) => {
    res.status(200).json({message: "Get all contatcts"})
})*/