import mongoose from 'mongoose';
import db from "../conect";
import Account from "./account";

export const TransactionSchema = mongoose.Schema({
    name: {
        type: String
    },
    direction: {
        type: String  // in or out
    },
    account: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Account'
    },
    categories: [
        {type : mongoose.Schema.ObjectId, ref : 'Category'}
    ],
    amount: {
        type: Number
    },
    dateTime: {
        type: Date
    }
}, {
    timestamps: true
});

// when adding a transaction associate it with the account.
TransactionSchema.post('save', function(doc) {
    Account.findOneAndUpdate({_id: doc.account}, {$push: {transactions: doc._id}}).exec()
});

const Transaction = db.model('Transaction', TransactionSchema);
export default Transaction;