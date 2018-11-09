import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './HeaderBar.css';
class HeaderBar extends Component {
    render() {
        return(
            <header>
                <div className="inner-container">
                    <div><strong>Baseball</strong>.com</div>
                </div>
            </header>
        );
    }
}

export default HeaderBar;