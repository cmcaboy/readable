import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addPost,loadPost} from './action/posts';
import * as PostAPI from './API/postsAPI';
import {loadCategory} from './action/category';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { loadComment } from './action/comments';

// Sets up the initial Redux Store
const store = configureStore();

// Load data from node/datebase into the state
PostAPI.getPosts()
    .then(posts => {
        posts.map(post => {
            store.dispatch(loadPost(post))
            PostAPI.getComments(post.id)
                .then(comments => {
                    comments.map(comment => {
                        store.dispatch(loadComment(post.id,comment));
                    })
                })
        })
});

PostAPI.getCategories()
    .then(categories => {
        categories.map(category => {
            store.dispatch(loadCategory(category.name));
        });
    });

// Provider allows redux's connect method to be available anywhere throughout the project.
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));