export default (comments, parentId) => {
    return comments.filter(comment => comment.parentId === parentId).length
}