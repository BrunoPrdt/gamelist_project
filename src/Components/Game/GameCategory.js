/**
 * @author Bruno Prédot
 * Licence
 * Fourth component
 */
import React from "react";

class GameCategory extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr style={{backgroundColor: "orange"}}>
                <th colSpan={2}>
                    {this.props.category}
                </th>
            </tr>
        )
    }
}

export default GameCategory