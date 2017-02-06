import React from 'react';
import { connect } from 'react-redux';
import store from '../../store.js';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = this.props;

        return (
            <div>
                <h1>Test Component</h1>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        testState: store.testState
    }
};

export default connect(mapStateToProps)(TestComponent);
