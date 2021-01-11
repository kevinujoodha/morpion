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
        console.log("TODO");
    }

    gestionClick(indiceCases) {
        const casesTmp = this.state.cases.slice();
        const gagnant = this.verifGrille();

        if(gagnant) {
            return;
        }

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
        return (
            <>
                <div>
                    Le joueur suivant est : {this.state.nextPlayer ? "X" : "O"}
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