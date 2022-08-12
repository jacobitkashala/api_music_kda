const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 20 });
module.exports = { myCache };
