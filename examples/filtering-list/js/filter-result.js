import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class FilterResult extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let { query } = this.props;

        return (
            <Well>There are no channels matching your query "{query}".</Well>
        );
    }
}

export default FilterResult;