import React from  'react';
import {Link} from 'react-router-dom';
//import Comments from './Comments';
import { connect } from 'react-redux';
import { upvotePost,downvotePost,removePost } from '../action/posts';
import { filterById } from '../action/filters';
import Comments from './Comments';

const PostListItem = ({dispatch,title,author,category,timestamp,voteScore,body,id}) => {
    const onVoteUp = () => {
        dispatch(upvotePost(id));
    };
    const onVoteDown = () => {
        dispatch(downvotePost(id));
    };
    const removeThisPost = () => {
        dispatch(removePost(id));
    };
    // Not Currently Used
    const detailFilter = () => {
        dispatch(filterById(id));
    };
    return (
    <div className="post-detail">
        <Link to={`/detail/${id}`}><h3>{title}</h3></Link>
        <h5>By: {author}</h5>
        <h5>Category: {category}</h5>
        <h5 className="post-timestamp">{timestamp}</h5>
        <h5>Vote Score: {voteScore}</h5>
        <button onClick={onVoteUp}>Vote Up</button>
        <button onClick={onVoteDown}>Vote Down</button>
        <Link to="/" onClick={removeThisPost}><button>Remove</button></Link>
        <Link to={`/edit/${id}`}><button>edit</button></Link>
        <p>{body}</p>
        <Comments id={id}/>
    </div>
    )
};

// Will need to add in the comment component.

export default connect()(PostListItem);

