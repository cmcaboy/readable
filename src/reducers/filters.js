import {LOCATION_CHANGE} from 'react-router-redux'; 

// Valid Categories: React, Redux, Udacity, None

export const filtersReducerDefaultState = {
    sortBy: 'vote',
    category: '',
    id: '' // Need to remember to unset this when going back to main page.
}

export default (state = filtersReducerDefaultState,action) => {
    switch(action.type) {
        case 'SORT_BY':
            return { ...state, sortBy: action.filter.sort}
        case 'FILTER_BY_CATEGORY':
            return { ...state, ...action.filter}
        case 'FILTER_BY_ID':
            return { ...state, id: action.filter.id}
        default:
            return state;
    }
}