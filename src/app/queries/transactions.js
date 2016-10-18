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
        account(id: $accountId) {
            transactions {
                edges {
                    node {
                        _id,
                        name,
                        amount,
                        createdAt,
                        dateTime,
                        categories {
                            edges {
                                node {
                                    _id,
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;