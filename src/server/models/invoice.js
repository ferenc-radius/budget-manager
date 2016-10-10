import mongoose from 'mongoose';

const InvoiceSchema = mongoose.Schema({
    name: {
        type: String
    },
    account: {
        type: mongoose.Schema.ObjectId, ref: 'Account'
    },
    transactions: {
        type: mongoose.Schema.ObjectId, ref: 'Transaction'
    },
    expected_amount: {
        type: Number,
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    interval: {
        type: String // none, month, year
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', InvoiceSchema);
export default Category;