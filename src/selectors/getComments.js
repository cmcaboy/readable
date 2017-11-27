export default (comments, parentId) => {
    return comments.filter(comment => {
        return comment.parentId === parentId;
        // By default, sort by vote score
    }).sort((a,b) => a.voteScore < b.voteScore ? 1 : -1);
}