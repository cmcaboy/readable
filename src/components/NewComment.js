import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './../action/comments';

class NewComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: props.comment ? props.comment.body:'',
            author: props.comment ? props.comment.body:'',
            error: ''
        }
    }
    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({body}));
    }
    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({author}));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.body) {
            this.setState(() => ({error: 'Error! Blank Comments are not allowed.'}));
        } else {
            this.setState(() => ({error: ''}));

            this.props.dispatch(addComment({
                body: this.state.body,
                author: this.state.author,
                parentId: this.props.parentId
            }));
            this.setState(() => ({
                body:'',
                author:''
            }));
        };
    };
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={this.state.author}
                    onChange={this.onAuthorChange}
                />
                <textarea
                    placeholder="Body"
                    onChange={this.onBodyChange}
                    value={this.state.body}
                />
                <button>Comment</button>
            </form>
            </div>
        )
    }
}

export default connect()(NewComment);