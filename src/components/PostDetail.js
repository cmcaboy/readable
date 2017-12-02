import React from 'react';
import {connect} from 'react-redux';
import PostListItem from './PostListItem';
import getPost from '../selectors/getPost';

const PostDetail = (props) => {
    //if(!props.post) {
    //    props.history.push('/pageNotFound');
    //}
    return (
        <div>
            {console.log(props.post)}
            {!props.post?(
                <h3>Post Not Found!</h3>
            ):(
                <PostListItem 
                key={props.post?props.post.id:''}
                {...props.post}
            />
            )}
            
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {
        // Will filter this with a selector
        post: getPost(state.posts,ownProps.match.params.id)
    };
};

export default connect(mapStateToProps)(PostDetail);