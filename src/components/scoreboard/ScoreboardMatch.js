import React, {Component} from 'react';
import "./ScoreboardMatch.css";
class ScoreboardMatch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="scoreboard-match">
                <div className="team">
                    <div className="team-abbr">{this.props.match.h_team.abbr}</div>
                    <div className="team-score">{this.props.match.h_team.score}</div>
                </div>
                <div className="team">
                    <div className="team-abbr">{this.props.match.a_team.abbr}</div>
                    <div className="team-score">{this.props.match.a_team.score}</div>
                </div>
            </div>
        );
    }
}

export default ScoreboardMatch;