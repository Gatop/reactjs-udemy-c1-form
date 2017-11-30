import React, { Component } from 'react';

// Import de componentes
import FormRow from './FormRow.js'

class Form extends Component {
    // Metodo render
    render(){
        return(
            <div>
                <h2>Registro</h2>
                <FormRow/>
                <FormRow/>
                <FormRow/>
            </div>
        );
    }
}

export default Form;
