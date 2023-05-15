import React from "react";

class ClassComponent extends React.Component {

    state={
            count: 0,
        }
    
    
    handlePlus = () => {
        this.setState({count: this.state.count + 1})
    }
    
    render (){
        return (
            <>
            <p> Class Component Here !!</p>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handlePlus}> + </button>
            </>
        )
    }
}

export default ClassComponent;