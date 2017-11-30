import React, { Component } from 'react';

// Import de componentes
import FormRow from './FormRow.js'

class Form extends Component {
    // Metodo render
    render(){
        return(
            <div>
                <h2>Registro</h2>
                <FormRow
                    inputType="Text"
                    labelText="Nombre"
                />
                <FormRow
                    inputType="Text"
                    labelText="Apellidos"
                />
                <FormRow
                    inputType="email"
                    labelText="Correo Electronico"
                />
                <FormRow
                    inputType="password"
                    labelText="Password"
                />
                <FormRow
                    inputType="password"
                    labelText="Confirmar Password"
                />
            </div>
        );
    }
}

export default Form;
