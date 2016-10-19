import gql from 'graphql-tag';

export const RemoveTransactionQuery = gql`
    mutation deleteTransaction($id: ID!) {
        deleteTransaction(input: {id: $id}) {
            ok
        }
    }
`;

export const TransactionListQuery = gql`

    query Transactions($accountId: ID!) {
        account(_id: $accountId) {
            transactions {
                _id,
                name,
                amount,
                dateTime,
                categories {
                    _id,
                    name
                }
            }
        }
    }
`;