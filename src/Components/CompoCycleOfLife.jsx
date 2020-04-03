/**
 * @author Bruno
 * Licence none
 * First pure React component
 */
import React from "react";

class CompoCycleOfLife extends React.Component{
    constructor(props) {
        super(props);//c'est pour le passer au parent
        console.log('Je passe dans le constructeur');
    }
    componentWillMount() {
        console.log('Je passe dans le componentWillMount');
    }

    render() {
        console.log('Je passe dans le render');
        return(
            <div>
                {/* <h6 className={'classcomponent-h6'}>Je suis le composant de cycle de vie</h6>*/}
            </div>
        )
    }
}

export default CompoCycleOfLife