
// TODO above should build something similar
//
// const resolvers = {
//
//     Query: {
//         async account(root, params, ctx, options) {
//             console.log(toObjectId);
//
//             // TODO see whats happening here :P
//             const projectionNested = getProjectionFromAST(options);
//             let accounts = await Account.populate("transactions", Transaction).find({_id: toObjectId(params._id)}, projectionNested);
//             accounts = accounts.map(a => {
//                 let b =  a.toJSON();
//                 b.transactions = b.transactions.map(c => c.toJSON());
//                 return b;
//             });
//             return accounts[0];
//         },
//
//         async accounts(root, params, ctx, options) {
//             const projectionNested = getProjectionFromAST(options);
//
//             // TODO only populate when provided in projection we should write something nice :)
//             let accounts = await Account.populate("transactions", Transaction).find({}, projectionNested);
//             return accounts.map(a => {
//                 let b =  a.toJSON();
//                 b.transactions = b.transactions.map(c => c.toJSON());
//                 return b;
//             });
//         }
//     },
//     Mutation: {
//
//         addAccount(root, params, ctx, options) {
//             console.log("addAccount", arguments);
//
//             return {}
//         }
//     }
// };
