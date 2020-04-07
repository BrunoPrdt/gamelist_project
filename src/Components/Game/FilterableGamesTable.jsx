/**
 * @author Bruno Prédot
 * Licence
 * First component
 */
import React from "react";
import SearchCompo from "./SearchCompo";
import GameTable from "./GameTable";

class FilterableGamesTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    //arow function to bind this!
    handleFilterTextChange = (val) => {
        this.setState({filterText: val})
    };
    //arow function to bind this!
    handleInStockChange = (val) => {
        this.setState({inStockOnly: val})
    };

    render() {
        console.log('modif state :','filterText:', this.state.filterText, 'et inStockOnly:', this.state.inStockOnly);

        return (

            <div>
                <h1>FilterableGamesTable</h1>
                <SearchCompo
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleFilterTextChange = {this.handleFilterTextChange}
                    handleInStockChange = {this.handleInStockChange}
                />
                <GameTable
                    games = {this.props.games}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

export default FilterableGamesTable