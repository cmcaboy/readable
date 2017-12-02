import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
//import {addPost,loadPost} from './action/posts';
import {fetchPostsAndComments,loadCategoryAsync} from './action/async';
import * as PostAPI from './API/postsAPI';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Sets up the initial Redux Store
const store = configureStore();

// Load data from node/datebase into the state
store.dispatch(fetchPostsAndComments());
store.dispatch(loadCategoryAsync());

// Provider allows redux's connect method to be available anywhere throughout the project.
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));