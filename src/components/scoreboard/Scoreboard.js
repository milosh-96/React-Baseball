import React, {Component} from 'react';
import './Scoreboard.css';
import ScoreboardMatch from './ScoreboardMatch';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let display = this.props.matches.map((match) =>{
            return <ScoreboardMatch key={match.id} match={match}></ScoreboardMatch>
        });
        return(
            <div className="scoreboard">
                <div className="inner-container">
                    {display}
                </div>
            </div>
        );
    }
}

export default Scoreboard;