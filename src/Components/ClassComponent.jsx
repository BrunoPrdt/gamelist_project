/**
 * @author Bruno
 * Licence none
 * First pure React component
 */
import React from "react";
import './ClassComponent.css';

class ClassComponent extends React.Component{
    constructor(props) {
        super(props);//c'est pour le passer au parent
        this.state = {
            nom: ''
        };
        //this.handleChange = this.handleChange.bind(this);
    }

    //arow function to bind this!
    handleChange = (e) => {
        //const value1 = e.target.value; // ou :
        const value2 = e.currentTarget.value;
        console.log(value2);
        this.setState({nom: value2});
        this.props.onInputChange(e.currentTarget.value);// pour remonter notre val au composant app si on veut s'en servir ailleurs
    };

    render() {
        return(
            <div>
                <h6 className={'classcomponent-h6'}>Je suis un composant avec son state, je passe une props : {this.props.test2}<br/>
                J'ai  également une props lié mon state composant : {this.state.nom}<br/>
                Et la même props-state remontée de mon composant vers App : {this.props.nomApp}</h6>
                <input type={'text'} value={this.state.nom} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default ClassComponent