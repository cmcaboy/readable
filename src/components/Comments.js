import React from  'react';
import {connect} from 'react-redux';
import NewComment from './NewComment';
import Comment from './Comment';
import getComments from '../selectors/getComments';
import numComments from '../selectors/numComments';

const Comments = (props) => (
    <div>
        <NewComment parentId={props.parentId}/>
        <p># of Comments: {props.commentCount}</p>
        {props.comments.map((comment) => (
            <Comment key={comment.id} {...comment}/>
        ))}
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        comments: getComments(state.comments,ownProps.id),
        parentId: ownProps.id,
        commentCount: numComments(state.comments,ownProps.id)
    }
}

export default connect(mapStateToProps)(Comments);
