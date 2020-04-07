/**
 * @author Bruno Prdt
 * Licence none
 * First pure React component
 */
import React from "react";

class CompoCycleOfLife extends React.Component{
    constructor(props) {
        super(props);//c'est pour le passer au parent
        console.log('Je passe dans le constructeur');
    }

    //componentWilMount est deprecie

    render() {
        console.log('Je passe dans le render');
        return(
            <div>
                {/* <h6 className={'classcomponent-h6'}>Je suis le composant de cycle de vie</h6>*/}
            </div>
        )
    }
    componentDidMount() {
        console.log('Je passe dans le componentDidMount');
    }
    //componentWillReceiveProps(nextProps, nextContext) { //is deprecated
    //}
    shouldComponentUpdate(nextProps, nextState, nextContext) {//on decide av true ou false si on effectue le rendu du compo
    }
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {//componentWillUpdate has been renamed, and is not recommended for use.
    }
}

export default CompoCycleOfLife