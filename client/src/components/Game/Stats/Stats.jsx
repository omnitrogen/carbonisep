
import React, { Component } from "react";
import Chart from "react-google-charts";

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [
                [
                    'Joueur',
                    'Score',
                    { role: 'style' },
                    {
                        sourceColumn: 0,
                        role: 'annotation',
                        type: 'string',
                        calc: 'stringify',
                    },
                ],
                ['Joueur1', 34, '#AAAAAA', null],
                ['Joueur2', 89, '#AAAAAA', null],
                ['PlayerOne', 3, '#AAAAAA', null],
                ['PlayerMauvais', 0, '#AAAAAA', null],
                ['P-5', 50, '#AAAAAA', null],
                ['You', 34, '#88B03C', null]
            ],
            score: [
                ['Tour', 'Score'],
                [1, 1000],
                [2, 1170],
                [3, 660],
                [4, 1030],
            ],
        };
    }

    updateLeaderBoard = () => {
        //REQUETE BDD pour get les 5 meilleurs joueurs et leurs scores [['Joueur1', 3], ['Joueur2', 4], etc.] 
        var new_leaderboard; //truc a get de la bdd

        var player;
        var i = 1;
        for (player of new_leaderboard) {
            this.state.scores[i][0] = player[0];
            this.state.scores[i][1] = player[1];
            i++;
        }
    };

    updateScore = (newTurnScore) => {
        this.state.score.push([this.state.score.length, newTurnScore]);
        this.state.scores[6][1] = newTurnScore;
    };

    render() {
        return (
            <div>
                <h1>Statistiques</h1>
                <div style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.scores}
                        options={{
                            title: 'Classement',
                            chartArea: { width: '50%' },
                            bar: { groupWidth: '95%' },
                            legend: { position: 'none' },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
                <br />
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.score}
                    options={{
                        title: 'Score',
                        chartArea: { width: '50%' },
                        vAxis: { minValue: 0 },
                        legend: { position: 'none' },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

export { Stats };
