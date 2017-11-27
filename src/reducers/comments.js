import * as CommentAPI from '../API/postsAPI';
const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState,action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            // Returns existing list of comments in the state and appends the latest
            // comment
            CommentAPI.createNewComment(action.comment);
            return [...state,action.comment];
        case 'LOAD_COMMENT':
            // Returns existing list of comments in the state and appends the latest
            // comment
            return [...state,action.comment.comment];
        case 'REMOVE_COMMENT':
            // Loop through the array of comments. Return all but the id in the action
            // argument
            CommentAPI.deleteComment(action.comment.id);
            return state.filter(element => element.id !== action.comment.id);
        case 'EDIT_COMMENT':
            // Loop through the state array. If the state id matches the action id,
            // send through the updates. If not, do not change the state element.
            CommentAPI.editExistingComment(action.comment.id,action.comment.updates);
            return  state.map(element => {
                if(element.id === action.comment.id) {
                    return {
                        ...element,
                        ...action.comment.updates
                    };
                } else {
                    return element;
                };
            });
        case 'UPVOTE_COMMENT':
            CommentAPI.voteOnComment(action.comment.id,'upVote');
            return state.map(element => {
                if(element.id === action.comment.id) {
                    return {
                        ...element,
                        voteScore: element.voteScore + 1
                    }
                } else {
                    return element;
                };
            });
        case 'DOWNVOTE_COMMENT':
            CommentAPI.voteOnComment(action.comment.id,'downVote');
            return state.map(element => {
                if(element.id === action.comment.id) {
                    return {
                        ...element,
                        voteScore: element.voteScore - 1
                    }
                } else {
                    return element;
                };
            });
        default:
        // If action.type does not match any of the above items, do not change state.
            return state;
    }
}
