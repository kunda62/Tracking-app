require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewates/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);


const mongoUri = 'mongodb+srv://kunda:nba2155422@cluster0.psegv.mongodb.net/<dbname>?retryWrites=true&w=majority';

if (!mongoUri) {
    throw new Error(
        'Nesto ne radi pas macku'
    );
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance bruder');
});

mongoose.connection.on('error', (e) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})