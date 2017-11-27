export default (posts, id) => {
    return posts.filter(post => {
        return post.id === id;
    })[0];
}