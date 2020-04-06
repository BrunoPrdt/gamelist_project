/**
 * @author Bruno Prédot
 * Licence
 * Fifth component
 */
import React from "react";

class GameRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let name;
        if (this.props.game.stocked) {
            name = this.props.game.name;
        } else {
            name = <span style={{color: "red"}}>{this.props.game.name};</span>
        }

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.game.price}</td>
            </tr>
        )
    }
}

export default GameRow