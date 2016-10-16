import gql from 'graphql-tag';

export const RemoveTransactionQuery = gql`
    mutation deleteTransaction($id: ID!) {
        deleteTransaction(input: {id: $id}) {
            ok
        }
    }
`;

export const TransactionListQuery = gql`
    query Transactions {
        transactions { _id, name, account {name}, categories {count} }
    }
`;