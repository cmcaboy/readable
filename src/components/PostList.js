import React from 'react';
import {connect} from 'react-redux';
import PostListItemMini from './PostListItemMini';
import applyFilters from '../selectors/posts';
import {filterByCategory,sortBy} from '../action/filters';

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    onSortChange = (e) => {
        const sortMethod = e.target.value;
        this.props.dispatch(sortBy(sortMethod));
    }

    render() {
        return (
            <div>
                <div className="sort-object">
                    <p>Sort By: </p>
                    <select
                        value={this.props.sortBy}
                        onChange={this.onSortChange}
                    >
                        <option value="timestamp">Most Recent</option>
                        <option value="vote">Highest Score</option>
                    </select>
                </div>
                {this.props.posts.map(post => (
                <PostListItemMini 
                    key={post.id}
                    {...post}
                />
            ))}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // Will filter this with a selector
        posts: applyFilters(state.posts,state.filters),
        sortBy: state.filters.sortBy
    };
};

export default connect(mapStateToProps)(PostList);