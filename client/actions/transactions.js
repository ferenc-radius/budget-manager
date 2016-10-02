export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACTION,
        id
    }
};
