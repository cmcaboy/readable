import React from 'react';
import NewPost from './NewPost';
import {connect} from 'react-redux';
import {editPost} from '../action/posts';
import getPost from '../selectors/getPost';

const EditPost = (props) => (
    <div>
        <h1>Edit Post</h1>
        <NewPost
            onSubmit={(post)=> {
                props.dispatch(editPost(props.match.params.id,post));
                props.history.push('/');
            }}
            id={props.match.params.id}
        />
    </div>
);

export default connect()(EditPost);

