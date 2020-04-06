/**
 * @author Bruno
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

        const rows = [];
        let key = 1;
            this.props.games.forEach(jeu => {
            rows.push(<GameRow key={key} game={jeu}/>);
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