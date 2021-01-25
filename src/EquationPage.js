import {NavLink} from "react-router-dom";
import * as react from "react";

class EquationPage extends react.Component {

    state = {
        a: undefined,
        b: undefined,
        c: undefined,
        x1: undefined,
        x2: undefined,
    }

    onAChange = (event) => {
        this.setState({
            a: event.target.value
        },() => {
            this.calculateX()
        })
    }

    onBChange = (event) => {
        this.setState({
            b: event.target.value
        },() => {
            this.calculateX()
        })
    }

    onCChange = (event) => {
        this.setState({
            c: event.target.value
        },() => {
            this.calculateX()
        })
    }

    ifHasAllData = () => {
        if (this.state.a && this.state.b && this.state.c)
            return true
    }

    calculateX = () => {
        if (this.ifHasAllData()){
            this.setState({
                x1: -(Math.sqrt(Math.pow(this.state.b,2) - 4*this.state.a*this.state.c) - this.state.b)/(2*this.state.a),
                x2: -(-Math.sqrt(Math.pow(this.state.b,2) - 4*this.state.a*this.state.c) - this.state.b)/(2*this.state.a)
            })
        }
    }

    render() {
        return (
            <div>
                <h1>This is the equation page</h1>
                <br/>
                a:  <input type={Number} value={this.state.a} onChange={this.onAChange}/>
                b:  <input type={Number} value={this.state.b} onChange={this.onBChange}/>
                c:  <input type={Number} value={this.state.c} onChange={this.onCChange}/>



                <div>
                    {this.ifHasAllData() &&
                       <div>
                           The equation is:
                           <h5>  {this.state.a}x^2 + {this.state.b}x + {this.state.c} = 0</h5>
                           <span><br/>The result is: <br/> x1: {this.state.x1} <br/>x2: {this.state.x2}</span>
                       </div>
                    }
                </div>

            </div>
        )
    }
}

export default EquationPage;