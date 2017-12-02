import {
    addComment,
    editComment,
    loadComment,
    removeComment,
    upVoteComment,
    downVoteComment
} from './comments.js';
import {
    addPost,
    editPost,
    loadPost,
    removePost,
    upVotePost,
    downVotePost
} from './posts.js';
import {loadCategory} from './category.js';
import * as PostAPI from '../API/postsAPI.js';

export function fetchPostsAndComments() {
        return dispatch => {
            PostAPI.getPosts()
                .then(posts => {
                    posts.map(post => {
                        dispatch(loadPost(post))
                        PostAPI.getComments(post.id)
                            .then(comments => {
                                comments.map(comment => {
                                    dispatch(loadComment(post.id,comment));
                                })
                            })
                    })
                });
        }
}

export function loadCategoryAsync() {
    return dispatch => {
        PostAPI.getCategories()
            .then(categories => {
                categories.map(category => {
                    dispatch(loadCategory(category.name));
                });
           });
    }
}
/*
export function addCommentAsync(newComment) {
    return dispatch => {
        PostAPI.createNewComment(newComment);
        dispatch(addComment(newComment))
    }
}
export function removeCommentAsync(id) {
    return dispatch => {
        PostAPI.deleteComment(id);
        dispatch(removeComment(id))
    }
}
export function EditCommentAsync(id,updates) {
    return dispatch => {
        PostAPI.editExistingComment(id,updates);
        dispatch(editComment(id,updates))
    }
}
export function upVoteCommentAsync(id) {
    return dispatch => {
        PostAPI.voteOnComment(id,'upVote');
        dispatch(upVoteComment(id))
    }
}

export function downVoteCommentAsync(id) {
    return dispatch => {
        PostAPI.voteOnComment(id,'downVote');
        dispatch(downVoteComment(id))
    }
}

export function addPostAsync(post) {
    return dispatch => {
        PostAPI.createNewPost(post);
        dispatch(addPost(post));
    }
}
export function removePostAsync(id) {
    return dispatch => {
        PostAPI.deletePost(id);
        dispatch(removePost(id));
    }
}
export function editPostAsync(id,updates) {
    return dispatch => {
        PostAPI.editExistingPost(id,updates);
        dispatch(editPost(id,updates));
    }
}
export function upVotePostAsync(id) {
    return dispatch => {
        PostAPI.voteOnPost(id,'upVote');
        dispatch(upVotePost(id));
    }
}
export function downVotePostAsync(id) {
    return dispatch => {
        PostAPI.voteOnPost(id,'downVote');
        dispatch(downVotePost(id));
    }
}
*/