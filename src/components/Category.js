import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { filterByCategory } from './../action/filters';

const Category = (props) => {

    const onSubmit = () => {
        props.dispatch(filterByCategory(props.name));
    }
    return (
        <div className="category">
            {props.name? (
                <Link  to={`/category/${props.name}`}>{props.name}</Link>
            ):(
                <Link  to='/'>Home</Link>
            )}
            
        </div>
    );
}

export default connect()(Category);