import React from 'react';
import {connect} from 'react-redux';
import PostListItem from './PostListItem';
import getPost from '../selectors/getPost';

const PostList = (props) => (
    <div>
        <PostListItem 
            key={props.post.id}
            {...props.post}
        />
    </div>
)

const mapStateToProps = (state,ownProps) => {
    return {
        // Will filter this with a selector
        post: getPost(state.posts,ownProps.match.params.id)
    };
};

export default connect(mapStateToProps)(PostList);