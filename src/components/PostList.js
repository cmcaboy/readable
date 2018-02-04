import React from 'react';
import {connect} from 'react-redux';
import PostListItemMini from './PostListItemMini';
import applyFilters from '../selectors/posts';
import {filterByCategory,sortBy} from '../action/filters';

const PostList = (props) => {

    const onSortChange = (e) => {
        const sortMethod = e.target.value;
        props.dispatch(sortBy(sortMethod));
    }
    return (
        <div>
            <div className="sort-object">
                <p>Sort By: </p>
                <select
                    value={props.sortBy}
                    onChange={onSortChange}
                >
                    <option value="timestamp">Most Recent</option>
                    <option value="vote">Highest Score</option>
                </select>
            </div>
            <div className="list-section">
                {props.posts.map(post => (
                    <PostListItemMini 
                        key={post.id}
                        {...post}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    ownProps.match.params ? state.filters.category = ownProps.match.params.category:state.filters.category='';

    return {
        // Will filter this with a selector
        posts: applyFilters(state.posts,state.filters),
        sortBy: state.filters.sortBy
    };
};

export default connect(mapStateToProps)(PostList);