import * as PostAPI from '../API/postsAPI';

const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState,action) => {
    switch(action.type) {
        case 'ADD_POST':
            // Returns existing list of posts in the state and appends the latest post
            PostAPI.createNewPost(action.post);
            return [...state,action.post];
        case 'REMOVE_POST':
            // Loop through the array of posts. Return all but the id in the action
            // argument
            PostAPI.deletePost(action.post.id);
            return state.filter(element => element.id !== action.post.id);
        case 'LOAD_POST':
            return [...state,action.post.post];
        case 'EDIT_POST':
            // Loop through the state array. If the state id matches the action id,
            // send through the updates. If not, do not change the state element.
            PostAPI.editExistingPost(action.post.id,action.post.updates);
            return  state.map(element => {
                if(element.id === action.post.id) {
                    return {
                        ...element,
                        ...action.post.updates
                    };
                } else {
                    return element;
                };
            });
        case 'UPVOTE_POST':
            PostAPI.voteOnPost(action.post.id,'upVote');
            return state.map(element => {
                if(element.id === action.post.id) {
                    return {
                        ...element,
                        voteScore: element.voteScore + 1
                    };
                } else {
                    return element;
                };
            });
        case 'DOWNVOTE_POST':
            PostAPI.voteOnPost(action.post.id,'downVote');
            return state.map(element => {
                if(element.id === action.post.id) {
                    return {
                        ...element,
                        voteScore: element.voteScore - 1
                    };
                } else {
                    return element;
                };
            });
        default:
        // If action.type does not match any of the above items, do not change state.
            return state;
    }
}