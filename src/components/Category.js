import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Category extends Component {
    render() {
        console.log('category props', this.props);

        return (
            <div>
                <Link className={'link-home'} to={'/'}><h4>Home</h4></Link>
                <h2>Category title</h2>
            </div>
        );
    }
}

function mapSateToProps(state) {
    return { category: state.category}
}

export default connect(mapSateToProps, null)(Category);