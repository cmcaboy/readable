const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState,action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return [...state,action.category];
        default: 
            return state;
    }
}