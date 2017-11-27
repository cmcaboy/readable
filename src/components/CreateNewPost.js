import React from 'react';
import NewPost from './NewPost';
import {connect} from 'react-redux';
import {addPost} from '../action/posts';

const CreateNewPost = (props) => (
    <div>
        <h1>New Post</h1>
        <NewPost
            onSubmit={(post)=> {
                props.dispatch(addPost(post));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(CreateNewPost);

