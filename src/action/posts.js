import moment from 'moment';
import uuid from 'uuid';

// ADD_POST
export const addPost = ({title = '',body='',author='Anonymous',category=''}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        timestamp: moment().format('LLLL'),
        title,
        body,
        author,
        category,
        voteScore: 1,
        deleted:false
    }
});

// EDIT_POST
export const editPost = (id,updates) => ({
    type: 'EDIT_POST',
    post: {
        id,
        updates
    }
});

// EDIT_POST
export const loadPost = (post) => ({
    type: 'LOAD_POST',
    post: {
        post
    }
});


// REMOVE_POST
export const removePost = (id) => ({
    type: 'REMOVE_POST',
    post: {
        id
    }
});

// UPVOTE_POST
export const upvotePost = (id) => ({
    type: 'UPVOTE_POST',
    post: {
        id
    }
});


// DOWNVOTE_POST

export const downvotePost = (id) => ({
    type: 'DOWNVOTE_POST',
    post: {
        id
    }
});

