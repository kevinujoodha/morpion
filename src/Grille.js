import React from 'react';
import Case from "./Case";

class Grille extends React.Component {

    rendreUneCase(indice) {
        return (
            <Case
                indice={indice}
                val={this.props.cases[indice]}
                onClick={() => this.props.gestionClick(indice)}
            />
        );
    }

    render() {

        return (
            <>
                <div>
                    {this.props.message}
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