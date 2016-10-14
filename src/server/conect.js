import mongoose from 'mongoose';

// Connect mongo database
let uri = 'mongodb://localhost/kasboek';
let options = { promiseLibrary: require('bluebird') };
let db = mongoose.createConnection(uri, options);
export default db;
