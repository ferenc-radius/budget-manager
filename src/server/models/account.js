import mongoose from 'mongoose';
import db from "../conect";


// an account has balances
export const BalanceSchema = mongoose.Schema({
    amount: {
        type: Number
    },
    datetime: {
        type: Date
    }
}, {
    timestamps: true
});


const AccountSchema = mongoose.Schema({
    name: {
        type: String
    },
    number: { // iban
        type: String
    },
    own_account: {
        type: Boolean
    },
    savings: {
        type: Boolean
    },
    transactions: [{
        type: mongoose.Schema.ObjectId, ref : 'Transaction'
    }],
    balances: [BalanceSchema],
}, {
    timestamps: true
});

const Account = db.model('Account', AccountSchema);
export default Account;