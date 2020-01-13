const mongoose = require('mongoose');
const app = require('./app');
const { mongodbURI } = require('./config/keys');

// Connect to Database
mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection error: ', error));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
