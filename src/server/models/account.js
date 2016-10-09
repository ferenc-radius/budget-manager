import mongoose from 'mongoose';
import Transaction from './transaction';

const AccountSchema = mongoose.Schema({
    name: {
        type: String
    },
    transactions: [ {type : mongoose.Schema.ObjectId, ref : 'Transaction'} ]
});

const Account = mongoose.model('Account', AccountSchema);
export default Account;