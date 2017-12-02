import React from 'react';
import { connect } from 'react-redux';
import getPost from '../selectors/getPost';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title:'',
            body: props.post ? props.post.body:'',
            category: props.post ? props.post.category:'',
            author: props.post ? props.post.author:'',
            error: ''
        };
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    }
    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({body}));
    }
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({category}));
    }
    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({author}));
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState(() => ({
            title: nextProps.post ? nextProps.post.title:'',
            body: nextProps.post ? nextProps.post.body:'',
            category: nextProps.post ? nextProps.post.category:'',
            author: nextProps.post ? nextProps.post.author:''
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title) {
            this.setState(() => ({error: 'Error! Please fill out a title.'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                category: this.state.category,
                author: this.state.author
            });
        };
    };
    render() {
        return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="Title"
                autoFocus
                value={this.state.title}
                onChange={this.onTitleChange}
            />
            <br />
            <input
                type="text"
                placeholder="Author Name"
                value={this.state.author}
                onChange={this.onAuthorChange}
            />
            <br />
            <textarea
                placeholder="Body"
                onChange={this.onBodyChange}
                value={this.state.body}
            />
            <br />
            <select
                value={this.state.category}
                onChange={this.onCategoryChange}
            >
                <option value=""></option>
                {this.props.categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <br />
            <button>Submit</button>
        </form>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: getPost(state.posts,ownProps.id),
        categories: state.categories // Add dyanmic category logic.
    }
}

export default connect(mapStateToProps)(NewPost);