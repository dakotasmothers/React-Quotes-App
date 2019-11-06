import React, {Component} from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
    render(){
        const html = document.documentElement;
        html.style.background = this.props.color;
        return (
            <div style={{ backgroundColor: 'white'}} className="QuoteBox">
            <h1 className="QuoteBox-quote fadeIn" style={{ color: this.props.color}}>{this.props.quote}</h1>
            <h4 className="QuoteBox-author fadeIn" style={{ color: this.props.color}}>
            -{this.props.author !== "" ? this.props.author : "Unknown"}-
            </h4>
            <button className="QuoteBox-button" onClick={this.props.handleClick}>New Quote</button>
            </div>
        )
    }
}

export default QuoteBox;