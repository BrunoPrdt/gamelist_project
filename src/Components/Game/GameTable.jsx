/**
 * @author Bruno Prédot
 * Licence
 * Third component
 */
import React from "react";
import GameCategory from "./GameCategory";
import GameRow from "./GameRow";

class GameTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let lastCat;
        const rows = [];
        let key = 1;

        this.props.games.forEach(jeu => {

            if (jeu.name.toLowerCase().indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !jeu.stocked) {
                return;
            }
            if (jeu.category !== lastCat) {
                rows.push(<GameCategory category={ jeu.category}/>)
            }
            rows.push(<GameRow key={key} game={jeu}/>);
            lastCat = jeu.category;

            key++;
        });

        return (
            <div style={{backgroundColor: "darkslateblue"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GameTable