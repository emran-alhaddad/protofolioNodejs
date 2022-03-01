const express = require('express');
const app = express();

const port = process.env.Port || 3000
app.use(express.static('./assets'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('*', (req, res) => {
    res.send('notfound');
});

app.listen(port, () => console.log('listening on port ${port}'));