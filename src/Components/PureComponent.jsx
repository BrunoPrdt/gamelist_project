/**
 * @author Bruno
 * Licence none
 * First pure React component
 */
import React from "react";
import './PureComponent.css';

export function PureComponent() {
    return (
        <div>
            <h6 className={'purecomponent-h6'}>Composant fonctionnel sans props</h6>
        </div>
    )
}

export function FunctionalPropsComponent(props) {
    return (
        <div>
            <h6 className={'purecomponent-h6'}>Composant fonctionnel avec props : {props.test1}</h6>
        </div>
    )
}


//export default PureComponent;