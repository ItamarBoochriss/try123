import {NavLink} from "react-router-dom";
import * as react from "react";

class TrianglePage extends react.Component {

    state = {
        height: undefined,
        base: undefined
    }

    onHeightChange = (event) => {
        this.setState({
            height: event.target.value
        })
    }

    onBaseChange = (event) => {
        this.setState({
            base: event.target.value
        })
    }

    ifHasAllData = () => {
        if(this.state.height && this.state.base)
            return true
        else
            return false
    }

    render() {
        return (
            <div>
                <h1>This is the Triangle page</h1>
                height: <input value={this.state.height} onChange={this.onHeightChange}/>
                base: <input value={this.state.base} onChange={this.onBaseChange}/>
                <br/>
            {
                this.ifHasAllData()&&
                    <h3>The area of the triangle is: {(this.state.base*this.state.height)/2}</h3>
            }

            </div>
        )
    }
}

export default TrianglePage;