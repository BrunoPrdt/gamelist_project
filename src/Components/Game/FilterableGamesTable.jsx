/**
 * @author Bruno
 * Licence
 * First component
 */
import React from "react";
import SearchCompo from "./SearchCompo";
import GameTable from "./GameTable";

class FilterableGamesTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        //console.log("les jeux ", props.games)
    }
    render() {
        return (
            <div style={{backgroundColor: "dodgerblue"}}>
                FilterableGamesTable
                <SearchCompo />
                <GameTable games = {this.props.games}/>
            </div>
        )
    }
}

export default FilterableGamesTable