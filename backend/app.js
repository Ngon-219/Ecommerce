const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user')
const cors = require('cors');
const ProdRouter = require('./routes/prod')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);
app.use(ProdRouter);

app.use((req, res) => {
    res.status(404).send('page not found');
});

app.listen(3001, () => {
    console.log('running in host 3001');
})