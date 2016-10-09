import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// import reducers from modules
import transactions from './transaction';

const rootReducer = combineReducers({
    transactions,
    routing
});

export default rootReducer;
