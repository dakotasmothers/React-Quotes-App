import React, {Component} from 'react';

class QuoteBox extends Component {
    render(){
        const html = document.documentElement;
        html.style.background = this.props.color;
        return (
            <div style={{ backgroundColor: 'white'}}>
            <h1 style={{ color: this.props.color}}>{this.props.quote}</h1>
            <h4 style={{ color: this.props.color}}>
            -{this.props.author !== "" ? this.props.author : "Unknown"}-
            </h4>
            <button onClick={this.props.handleClick}>New Quote</button>
            </div>
        )
    }
}

export default QuoteBox;