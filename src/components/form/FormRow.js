import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormRow extends Component {

    // Constructor del componente
    constructor(pops) {
        super(pops);

        // Estados
        this.state = {
            inputValue: ''
        }
        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    // Metodo onchange para el componente generico
    onChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    // Retorna el valor del inputValue
    getValue(){
        return this.state.inputValue;
    }

    // Metodo render
    render(){
        return(
            <div>
                <label>{ this.props.labelText }</label>
                <input
                    type= { this.props.inputType }
                    value= {this.state.inputValue}
                    onChange= {this.onChange}/>
            </div>
        );
    }
}

// Propiedades del componente
FormRow.propTypes = {
    inputType: PropTypes.string,
    labelText: PropTypes.string
}

export default FormRow;
