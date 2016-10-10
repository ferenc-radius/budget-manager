import mongoose from 'mongoose';

// balance is a snapshot of the state of an account
const BalanceSchema = mongoose.Schema({
    amount: {
        type: Number
    },
    account: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Account'
    },
    datetime: {
        type: Date
    }
}, {
    timestamps: true
});

const Balance = mongoose.model('Balance', BalanceSchema);
export default Balance;