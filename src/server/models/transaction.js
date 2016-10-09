import mongoose from 'mongoose';

const TransactionSchema = mongoose.Schema({
    name: {
        type: String
    },
    account: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Account'
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;