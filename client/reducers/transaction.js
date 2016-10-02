import { Meteor } from 'meteor/meteor';
import { DELETE_TRANSACTION } from '/client/actions/transactions';

export default function deleteTransaction(state = [], action) {
    switch (action.type) {
        case DELETE_TRANSACTION:
            Meteor.call('transactions.delete', action.id);
            return state;

        default:
            return state;
    }
};

