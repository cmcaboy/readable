import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { filterByCategory } from './../action/filters';
import Category from './Category';


const Sidebar = (props) => {

    const onSubmitNone = (e) => {
        props.dispatch(filterByCategory(''));
    }

    return (
    <div className="sidebar-container">
        <Link to="/create"><button>New</button></Link>
        <Category name=''/>
        {props.categories.map(category => (
            <Category key={category} name={category}/>
        
        ))}
    </div>
)};

const mapStateToProps = (state,ownProps) => {
    return {
        categories: state.categories,
        dispatch: ownProps.dispatch

    }
}

export default connect(mapStateToProps)(Sidebar);