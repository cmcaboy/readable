// This function is called to filter the list of posts that the user will see
// based on category. In addition, a sort function will be applied to the list.
export default (posts, {category,sortBy,id}) => {
    if(id){
        return posts.filter(post => {
            return post.id === id;
        });
    } else {
        return posts.filter(post => {
            return !category || post.category === category;
        }).sort((a,b) => {
            if(sortBy === 'timestamp') {
                return a.timestamp < b.timestamp ? 1 : -1;
            }
            if(sortBy === 'vote') {
                return a.voteScore < b.voteScore ? 1 : -1;
            }
        });
    };
}