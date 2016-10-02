import { Meteor } from 'meteor/meteor';
import Transactions from '/app/api/transactions';

Meteor.publish('transactions', () => {
    return Transactions.find({});
});
