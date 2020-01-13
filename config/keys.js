const production = require('./production');
const development = require('./development');

switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = production;
    break;
  default:
    module.exports = development;
    break;
}
