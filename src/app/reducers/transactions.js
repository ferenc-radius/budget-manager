export default function transactions(state = {transactions: []}, action) {
    switch (action.type) {
        case 'TRANSACTIONS_LOADED':
            return Object.assign({}, {transactions: action.result.data.transactions});

        default:
            return state;
    }
}