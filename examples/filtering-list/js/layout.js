import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FilterInput from './filter-input';
import FilterList from './filter-list';
import FilterResult from './filter-result';
import 'bootstrap/dist/css/bootstrap.css';

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: "",
            length: 0
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);
    }

    handleQueryChange(q){
        this.setState({
            query: q
        });
    }

    handleLengthChange(l){
        this.setState({
            length: l
        })
    }

    render() {
        const containerStyle = {
            margin: "40px auto"
        };

        let { query, length } = this.state;

        return (
            <Row>
                <Col lg={2} md={2} sm={1} xs={1}/>
                <Col lg={8} md={8} sm={10} xs={10} style={containerStyle}>
                    <div className="form-group form-group-lg">
                        <FilterInput handleQueryChange={this.handleQueryChange}/>
                    </div>
                    <FilterList query={query} length={length} handleLengthChange={this.handleLengthChange}/>
                    {length == 0}
                    {length == 0 && <FilterResult query={query}/>}
                </Col>
            </Row>
        );
    }
}

export default Layout;