/**
 * @author Bruno Prdt
 * Licence
 * Second component
 */
import React from "react";

class SearchCompo extends React.Component{

    constructor(props) {
        super(props);
    }

    handleFilterTextChange = (e) => {
        this.props.handleFilterTextChange(e.target.value);
    };

    handleInStockChange = (e) => {
        this.props.handleInStockChange(e.target.checked);
    };

    render() {
        return (
            <div style={{backgroundColor: "indianred"}}>
                <input
                    type="text"
                    placeholder={'search (lowercase only) '}
                    //text = {this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <input
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange}
                />
                {' '} Produits en stock seulement.
            </div>
        )
    }
}

export default SearchCompo