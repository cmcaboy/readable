import moment from 'moment';
import uuid from 'uuid';

// ADD_COMMENT
export const addComment = ({parentId,body='',author='Anonymous'}) => ({
    type: 'ADD_COMMENT',
    comment: {
        id: uuid(),
        parentId,
        timestamp: moment().format(),
        body,
        author,
        voteScore: 1,
        deleted:false,
        parentDeleted:false
    }
});


// EDIT_COMMENT
export const editComment = (id,updates) => ({
    type: 'EDIT_COMMENT',
    comment: {
        id,
        updates
    }
});

// LOAD_COMMENT
export const loadComment = (parentId,comment) => ({
    type: 'LOAD_COMMENT',
    comment: {
        parentId,
        comment
    }
});


// REMOVE_POST
export const removeComment = (id) => ({
    type: 'REMOVE_COMMENT',
    comment: {
        id
    }
});

// UPVOTE_POST
export const upVoteComment = (id) => ({
    type: 'UPVOTE_COMMENT',
    comment: {
        id
    }
});


// DOWNVOTE_COMMENT
export const downVoteComment = (id) => ({
    type: 'DOWNVOTE_COMMENT',
    comment: {
        id
    }
});




