import React, { Component } from 'react';

// Import de componentes
import FormRow from './FormRow.js'

class Form extends Component {

    // Constructor del componente
    constructor(){
        super();

        this.onRegister = this.onRegister.bind(this);
    }

    // Metodo que maneja el evento del boton
    onRegister(e) {
        console.log(this.refs.nombre.getValue());
    }

    // Metodo que maneja el submit del form
    onSubmit(e){
        e.preventDefault();
    }

    // Metodo render
    render(){
        return(
            <div>
                <h2>Registro</h2>
                <form onSubmit={this.onSubmit}>
                    <FormRow
                        inputType="Text"
                        labelText="Nombre"
                        ref="nombre"
                    />
                    <FormRow
                        inputType="Text"
                        labelText="Apellidos"
                        ref="apellidos"
                    />
                    <FormRow
                        inputType="email"
                        labelText="Correo Electronico"
                        ref="email"
                    />
                    <FormRow
                        inputType="password"
                        labelText="Password"
                        ref="password"
                    />
                    <FormRow
                        inputType="password"
                        labelText="Confirmar Password"
                        ref="confirm-password"
                    />
                    <button onClick={this.onRegister}>Registro</button>
                </form>
            </div>
        );
    }
}

export default Form;
