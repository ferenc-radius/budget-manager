import { Mongo } from 'meteor/mongo';

const Transactions = new Mongo.Collection('transactions');
export default Transactions;

Meteor.methods({
    'transactions.delete': function(id) {
        Transactions.remove(id);
    }
});
