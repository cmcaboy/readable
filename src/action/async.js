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