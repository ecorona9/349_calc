import './Calc.css';
import { evaluate } from 'mathjs'
import React, {Component} from "react";

class Calculator extends Component {
    state = {
      display: '0',
      actionCount: 0,
    }

    negate() {
        let newDisplay = '-(' + this.state.display + ')';
        this.setState({display: newDisplay})
    }
    clear() {
        this.setState({actionCount: 0})
        this.setState({display: '0'})
    }
    concat(s) {
        let newDisplay;
        let newActionCount = this.state.actionCount;
        if(this.state.actionCount === 0)
            newDisplay = s;
        else
            newDisplay = this.state.display + s;
        newActionCount++;
        this.setState({actionCount: newActionCount})
        this.setState({display: newDisplay})
    }
    percent() {
        let newDisplay = '(' + this.state.display + ')/100.0';
        this.setState({display: newDisplay})
    }
    solve() {
        let newDisplay = evaluate(this.state.display);
        this.setState({display: newDisplay})
        console.log('solving');
    }
    render() {
      return (
        <div className="Calculator-wrap">
            <div className="Output">
                {this.state.display}
            </div>
            <button onClick={() => this.clear()}>C</button>
            <button onClick={() => this.negate()}>+/-</button>
            <button onClick={() => this.percent()}>%</button>
            <button onClick={() => this.concat('/')} className="op">/</button>
            <br/>
            <button onClick={() => this.concat('7')}>7</button>
            <button onClick={() => this.concat('8')}>8</button>
            <button onClick={() => this.concat('9')}>9</button>
            <button onClick={() => this.concat('*')} className="op">X</button>
            <br/>
            <button onClick={() => this.concat('4')}>4</button>
            <button onClick={() => this.concat('5')}>5</button>
            <button onClick={() => this.concat('6')}>6</button>
            <button onClick={() => this.concat('-')} className="op">-</button>
            <br/>
            <button onClick={() => this.concat('1')}>1</button>
            <button onClick={() => this.concat('2')}>2</button>
            <button onClick={() => this.concat('3')}>3</button>
            <button onClick={() => this.concat('+')} className="op">+</button>
            <br/>
            <button onClick={() => this.concat('0')} className="double">0</button>
            <button onClick={() => this.concat('.')}>.</button>
            <button onClick={() => this.solve()} className="op">=</button>
        </div>
      );
    }
  }


export default Calculator