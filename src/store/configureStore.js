import {createStore,combineReducers} from 'redux';
// Import Reducers
import postsReducer from '../reducers/posts';
import commentsReducer from '../reducers/comments';
import filtersReducer from '../reducers/filters';
import categoryReducer from '../reducers/category';


export default () => {
    const store = createStore(
        combineReducers({
            // List reducers once they are defined.
            posts: postsReducer,
            comments: commentsReducer,
            filters: filtersReducer,
            categories: categoryReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}