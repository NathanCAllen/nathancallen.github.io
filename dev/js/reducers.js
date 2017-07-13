import { combineReducers } from 'redux';

import { CHANGE_PAGE } from './actions';

function page(state = '', action) {
    switch (action) {
        case true:
            return action;
        default:
            return 'Home';
    }
}

const webPage = combineReducers({
    page
});

export default webPage;