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

    handleChange = (e) => {
        //const value1 = e.target.value; // ou :
        const value2 = e.currentTarget.value;
        console.log(value2);
        this.setState({nom: value2});
    };

    render() {
        return(
            <div>
                <h6 className={'classcomponent-h6'}>Je suis un composant avec son state, je passe une props : {this.props.test2}</h6>
                <input type={'text'} value={this.state.nom} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default ClassComponent