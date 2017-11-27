// api template
const api='http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Accept': 'application/json'
}

// GET categories
export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

// GET posts
export const getPosts = () =>
fetch(`${api}/posts`, {headers})
    .then(res => {
        return res.json();
    })
    .then(data => {
        return data;
    })

// GET comments
export const getComments = (parentId) =>
fetch(`${api}/posts/${parentId}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)

// Create a new post
export const createNewPost = (post) => 
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...post})
    }).then(res => res.json())

// Create a new comment
export const createNewComment = (comment) => 
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...comment})
    }).then(res => res.json())

// PUT posts
export const editExistingPost = (id,post) => 
fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({...post})
}).then(res => res.json())

// Edit Comments
export const editExistingComment = (id,comment) => 
fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({...comment})
}).then(res => res.json())

// Upvote or downvote a post
export const voteOnPost = (id,option) => 
fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
}).then(res => res.json())

// Upvote or downvote a comment
export const voteOnComment = (id,option) => 
fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
}).then(res => res.json())

// Delete Post
export const deletePost = (id) => 
fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    }
})

// Delete Comment
export const deleteComment = (id) => 
fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    }
})







