import {NavLink} from "react-router-dom";
import * as react from "react";

class PitagorasPage extends react.Component {

    state = {
        a: undefined,
        b: undefined,
        c: undefined
    }

    onAChange = (event) => {
        this.setState({
            a: event.target.value
        },() => {
            this.calc()
        })
    }

    onBChange = (event) => {
        this.setState({
            b: event.target.value
        },() => {
            this.calc()
        })
    }

    onCChange = (event) => {
        this.setState({
            c: event.target.value
        },() => {
            this.calc()
        })
    }

    BNC = () => {
        if ((this.state.b && this.state.c))
            return true
        else
            return false
    }

    ANB = () => {
        if ((this.state.a && this.state.b)){
            return true
        }

        else
            return false
    }

    ANC = () => {
        if ((this.state.a && this.state.c))
            return true
        else
            return false
    }

    Clear = () => {
        this.setState({
            a: undefined,
            b: undefined,
            c:undefined
        })
    }

    calc = () => {
        if (this.ANB()){
            this.setState({
                c: Math.sqrt(Math.pow(this.state.a,2) + Math.pow(this.state.b,2))
            })
        }
        else if (this.BNC()){
            this.setState({
                a: Math.sqrt(Math.pow(this.state.c,2) - Math.pow(this.state.b,2))
            })
        }

        else if (this.ANC()){
            this.setState({
                b: Math.sqrt(Math.pow(this.state.c,2) - Math.pow(this.state.a,2))
            })

        }
    }

    render() {
        return (
            <div>
                <h1>This is the Pitagoras page</h1>
                a:  <input type={Number} value={this.state.a} onChange={this.onAChange}/>
                b:  <input type={Number} value={this.state.b} onChange={this.onBChange}/>
                c:  <input type={Number} value={this.state.c} onChange={this.onCChange}/>
                <br/>
                <br/>

                <button onClick={this.Clear}>Clear</button>

                <h3>a: {this.state.a} <br/>b: {this.state.b}<br/> c: {this.state.c}</h3>


            </div>
        )
    }
}

export default PitagorasPage;