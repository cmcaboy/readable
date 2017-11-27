import React from 'react';
import {upVoteComment,downVoteComment,removeComment,editComment} from  '../action/comments';
import {connect} from 'react-redux';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            bodyField: props.comment ? props.comment.body:'',
            authorField: props.comment ? props.comment.author:''
        }
    }
    voteUp = () => {
        this.props.dispatch(upVoteComment(this.props.id));
    }
    voteDown = () => {
        this.props.dispatch(downVoteComment(this.props.id));
    }
    removeThisComment = () => {
        this.props.dispatch(removeComment(this.props.id));
    }
    onAuthorChange = (e) => {
        const authorField = e.target.value;
        this.setState(() => ({authorField}));
    }
    onBodyChange = (e) => {
        const bodyField = e.target.value;
        this.setState(() => ({bodyField}));
    }
    updateThisComment = (e) => {
        this.setState(() => ({
            bodyField: this.props.body,
            authorField: this.props.author,
            editMode: true
        }));
    }
    onCancel = () => {
        this.setState(() => ({
            bodyField: this.props.body,
            authorField: this.props.author,
            editMode: false
        }));
    };
    onUpdate = () => {
        this.props.dispatch(editComment(this.props.id,{
            body:this.state.bodyField,
            author:this.state.authorField
        }));
        this.setState(() => ({
            bodyField: this.props.body,
            authorField: this.props.author,
            editMode: false
        }));
    };
    render() {
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.authorField}
                        onChange={this.onAuthorChange}
                    />
                    <textarea
                        placeholder="Body"
                        onChange={this.onBodyChange}
                        value={this.state.bodyField}
                    />
                    <button onClick={this.onUpdate}>Update</button>
                    <button onClick={this.onCancel}>Cancel</button>
                    </div>
                ) : (
                    <div>
                    <p>{this.props.author}</p>    
                    <p>{this.props.body}</p>
                    </div>
                )}
                <p>{this.props.timestamp}</p>
                <p>{this.props.voteScore}</p>
                <button onClick={this.voteUp}>Like</button>
                <button onClick={this.voteDown}>Dislike</button>
                <button onClick={this.removeThisComment}>Remove</button>
                <button onClick={this.updateThisComment}>Update</button>
            </div>
        )
    }

}

export default connect()(Comment);