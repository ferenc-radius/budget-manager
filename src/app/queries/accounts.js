import gql from 'graphql-tag';

export const AccountListQuery = gql`
    query Accounts($own_account: Boolean!) {
        accounts(own_account: $own_account) { 
            _id, 
            name, 
            number, 
            own_account, 
            savings, 
            balances {
                amount, 
                createdAt
            }
        }
    }
`;
