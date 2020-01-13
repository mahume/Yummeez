const mongoose = require('mongoose');
const app = require('./app');
const { mongodbURI } = require('./config/keys');

const PORT = process.env.PORT || 8080;

// Connect to Database
mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection error: ', error));

// Listen on server
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
