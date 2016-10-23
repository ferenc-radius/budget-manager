## Features
 - crud accounts
 - add balance to account (huidige balance zien)
 - categories + subcategories aanmaken (tree structure)
 - budgets aanmaken (deze hoord bij een category)
 - overzicht van balance per account (huidige balance)
 - importeren transactions
 - transaction aan account hangen (van en tot rekening > 2 accounts).
 - transaction aan category hangen.
 - inzien uitgaven in budget (transactions in category van budget)

## UI
 - https://www.materialpalette.com

## graphql
 - https://github.com/nodkz/graphql-compose > resolver composen?
   - https://github.com/nodkz/graphql-compose/blob/master/src/resolver.js
 
## structure 
 - refactor dir structure > 
   - reducers/<domain>/actionTypes.js
                       actions.js
                       reducers.js
 
 - https://github.com/reactjs/reselect
 - reformat transaction see 
   - https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a#.bb92nztwc
   - https://github.com/paularmstrong/normalizr
 - https://docs.mongodb.com/manual/ > lezen ;)
 - https://docs.mongodb.com/manual/core/map-reduce/ gebruiken om bijvoorbeeld transaction amount in periode uit te rekenen.'
 - https://github.com/nnance/f8app-apollo > flowtype
 - https://www.npmjs.com/package/invariant

## starten servers
 - pm2 gebruiken om bin/server.js te starten
 - docker ??
 
## transactions paginering
 - https://medium.com/apollo-stack/pagination-and-infinite-scrolling-in-apollo-client-59ff064aac61#.lfp7bludv
 
## csv parsing 
 - ?
 
## pub/sub
 - ?
 
## forms
 - uitzoeken redux-form
 
## Technical
 - reactd3 aan de praat krijgen.
 - mongo indexes?
 
## ophalen csv knab
 - redux-saga > gebruiken in combi met apollo client (ophalen accounts?)
 
## testing
 - enzymef
 - http://chaijs.com/
 - tests schrijven http://redux.js.org/docs/recipes/WritingTests.html
 
## Interesting
 - https://ant.design/components/tree-select/ > voor selecteren categorieen
 
## later 
 - loader animations