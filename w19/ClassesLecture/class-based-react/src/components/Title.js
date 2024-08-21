import { Component } from "react";
// Classes don't have hooks
// useState, but we still have state
// We don't have useEffect as well, but we have other things call lifecycle methods
class Title extends Component {
    constructor(props) {
        super(props)
    }
    // 
    render(){
        return(
            <h1>{this.props.title}</h1>
        )
    }
}

export default Title;