import gql from 'graphql-tag';

// (own_account: $own_account)
export const AccountListQuery = gql`
    query Account{
        accounts { 
            _id,
            name,
            number,
            own_account,
            savings,
            balances {
                dateTime,
                amount
            }
        }
    }
`;
