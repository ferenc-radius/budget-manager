import mongoose from 'mongoose';

const TransactionSchema = mongoose.Schema({
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

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;