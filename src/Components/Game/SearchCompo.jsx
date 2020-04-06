/**
 * @author Bruno
 * Licence
 * Second component
 */
import React from "react";

class SearchCompo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFilterTextChange = (e) => {
        console.log(e.target.value);
    };

    handleInStockChange = (e) => {
        console.log(e.currentTarget.checked);
    };

    render() {
        return (
            <div style={{backgroundColor: "indianred"}}>
                <input
                    type="text"
                    placeholder={'search'}
                    onChange={this.handleFilterTextChange}
                />
                <input
                    type="checkbox"
                    onChange={this.handleInStockChange}
                />
                {' '} Produits en stock seulement.
            </div>
        )
    }
}

export default SearchCompo