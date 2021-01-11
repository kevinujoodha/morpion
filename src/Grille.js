import React from 'react';
import Case from "./Case";

class Grille extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cases: Array(9).fill(null),
            nextPlayer: true
        }
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

        for (let i = 0; i < tabCombinaisons.length; i++) {
            const [a, b, c] = tabCombinaisons[i];
            if(this.state.cases[a] &&
                this.state.cases[a] === this.state.cases[b] &&
                this.state.cases[a] === this.state.cases[c]
            ) {
                return this.state.cases[a];
            }
        }
        return null;
    }

    gestionClick(indiceCases) {
        const gagnant = this.verifGrille();
        if(gagnant || this.state.cases[indiceCases]) {
            return;
        }

        const casesTmp = this.state.cases.slice();
        casesTmp[indiceCases] = this.state.nextPlayer ? "X" : "O";
        this.setState({
            cases: casesTmp,
            nextPlayer: !this.state.nextPlayer
        });
    }

    rendreUneCase(indice) {
        return (
            <Case
                indice={indice}
                val={this.state.cases[indice]}
                onClick={() => this.gestionClick(indice)}
            />
        );
    }

    render() {
        const gagnant = this.verifGrille();
        let message = "";
        if(gagnant) {
            message = gagnant + " a éclaté son adversaire";
        } else {
            message = "Le joueur suivant est : " + (this.state.nextPlayer ? "X" : "O");
        }

        return (
            <>
                <div>
                    {message}
                </div>
                <div>
                    {this.rendreUneCase(0)}
                    {this.rendreUneCase(1)}
                    {this.rendreUneCase(2)}
                </div>

                <div>
                    {this.rendreUneCase(3)}
                    {this.rendreUneCase(4)}
                    {this.rendreUneCase(5)}
                </div>

                <div>
                    {this.rendreUneCase(6)}
                    {this.rendreUneCase(7)}
                    {this.rendreUneCase(8)}
                </div>
            </>
        )
    }
}

export default Grille;