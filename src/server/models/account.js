import mongoose from 'mongoose';


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
    balances: [{
        type: mongoose.Schema.ObjectId, ref : 'Balance'
    }],
}, {
    timestamps: true
});

const Account = mongoose.model('Account', AccountSchema);
export default Account;