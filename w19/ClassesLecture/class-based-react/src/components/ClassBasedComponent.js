// All Class based components extend from the Component Class
import { Component } from 'react';

class ClassBasedComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <h1>This is my first Class Based Component!</h1>
        )
    }
}

export default ClassBasedComponent;