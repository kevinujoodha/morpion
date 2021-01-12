import React from 'react';
import './App.css';
import Grille from "./Grille";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nextPlayer: true,
            history: [
                {cases: Array(9).fill(null)}
            ]
        }
    }

    handleCancel() {
        if (this.state.history.length <= 1) {
            return;
        }

        const historyTmp = this.state.history.slice();
        historyTmp.pop();
        this.setState({
            history: historyTmp
        })
        console.log("Cancel ...");
    }

    verifGrille() {
        const tabCombinaisons = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const currentCases = this.getCurrentCases();

        for (let i = 0; i < tabCombinaisons.length; i++) {
            const [a, b, c] = tabCombinaisons[i];
            if (currentCases[a] &&
                currentCases[a] === currentCases[b] &&
                currentCases[a] === currentCases[c]
            ) {
                return currentCases[a];
            }
        }
        return null;
    }

    getCurrentCases() {
        return this.state.history[this.state.history.length - 1].cases;
    }

    gestionClick(indiceCases) {
        const currentCases = this.state.history[this.state.history.length - 1].cases;
        const gagnant = this.verifGrille();
        if (gagnant || currentCases[indiceCases]) {
            return;
        }

        const casesTmp = currentCases.slice();
        casesTmp[indiceCases] = this.state.nextPlayer ? "X" : "O";

        const historyTmp = this.state.history.slice();
        historyTmp.push({cases: casesTmp});
        this.setState({
            nextPlayer: !this.state.nextPlayer,
            history: historyTmp
        });
    }

    render() {
        const gagnant = this.verifGrille();
        let message = "";
        if (gagnant) {
            message = gagnant + " a éclaté son adversaire";
        } else {
            message = "Le joueur suivant est : " + (this.state.nextPlayer ? "X" : "O");
        }
        return (
            <>
                <Grille
                    cases={this.state.history[this.state.history.length - 1].cases}
                    gestionClick={(indice) => this.gestionClick(indice)}
                    message={message}
                />
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </>
        )
    }
}

export default App;
