import React,{Component} from "react";
export default class Counterapplication extends Component{
    constructor(Props){
        super(Props)
        this.state={
               count:0
        }
    }
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
    dec=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <>
              <div id="view">
                <h1 id="head">FOOD COUNTER 🥂</h1>
              <button onClick={this.inc} className="incbt">Craving more Add more🍕</button>
             <span id="val">{this.state.count}</span>
             <button onClick={this.dec} className="incbt">There in Dite Eatless🥗</button><br />
             <button onClick={this.reset} id="re">Reset</button>
              </div>
            </>
        )
    }
}