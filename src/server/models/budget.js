import mongoose from 'mongoose';


const BudgetSchema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId, ref: 'Category'
    },
    amount: {
        type: Number
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

const Budget = mongoose.model('Budget', BudgetSchema);
export default Budget;