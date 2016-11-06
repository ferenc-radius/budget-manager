
## Features
Accounts
========
 - update accounts
 - add balance to account (huidige balance zien)
 - laatste balance toevoegen
 - laatste balance in overzicht
 
Settings
========
 - maand periode kunnen defineren. (settings) (opslaan in state & localstorage)
 
Categorieen
===========
  - categories + subcategories aanmaken (tree structure)
  - inzien van uitgaven per categorie
  - pie-chart met uitgaven per categorie
  - pie-chart met inkomsten per categorie
  
Invoices
========
 - overzicht van verwachte invoices deze maand (nu per maand)
 - overzicht van de deze maand nog open staande invoices
 
Budgets
=======
  - budgets aanmaken (deze hoord bij een category)
  - inzien uitgaven in budget (transactions in category van budget)

Importeren
==========
 - importeren transactions
 - transaction aan account hangen (van en tot rekening > 2 accounts).
 - transaction aan category hangen.

Transactions
============
 - opsplitsen
 - aan categoriee hangen (met optie om 'gelijke' transactions ook in die category te geven)
 - maak invoice van transaction

## UI
 - account filter (reselect!)
 - accounts toggle voor mobiel layout
 - https://github.com/tonyhb/redux-ui (for what??)

## graphql
 - querybuilder > filters toevoegen (herschrijven naar class)
 - property methods (get lastBalance)
 
## structure 
 - reformat transaction with normalizr
 - https://github.com/elgerlambert/redux-localstorage ( https://github.com/michaelcontento/redux-storage ?)
 - https://github.com/reactjs/reselect
 - https://github.com/nnance/f8app-apollo > flowtype
 - https://www.npmjs.com/package/invariant
 - https://docs.mongodb.com/manual/ > lezen ;)
 - https://docs.mongodb.com/manual/core/map-reduce/ gebruiken om bijvoorbeeld transaction amount in periode uit te rekenen.'
 - https://hackernoon.com/building-d3-components-with-react-7510e4743288#.rvk5a5e3w

## starten servers
 - pm2 gebruiken om bin/server.js te starten
 - docker ??
 
## transactions paginering
 - https://medium.com/apollo-stack/pagination-and-infinite-scrolling-in-apollo-client-59ff064aac61#.lfp7bludv
 
## csv parsing 
 - ?
 
## pub/sub
 - ?
 
 
## Technical
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