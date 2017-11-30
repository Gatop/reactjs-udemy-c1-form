import React, { Component } from 'react';

// Import de componentes
import FormRow from './FormRow.js'

class Form extends Component {

    // Constructor del componente
    constructor(){
        super();

        // Estados
        this.state = {
            labelLegend: ''
        }

        // Bindeando los metodos
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Metodo que maneja el submit del form
    onSubmit(e){
        e.preventDefault();
        // Obteniendo los valores del formulario
        let nombre           = this.refs.nombre.getValue();
        let apellidos        = this.refs.apellidos.getValue();
        let email            = this.refs.email.getValue();
        let password         = this.refs.password.getValue();
        let confirm_password = this.refs.confirm_password.getValue();

        // Validando las contraseñas
        if (password === confirm_password) {
            this.setState({
                labelLegend: 'Logueado Exitosamente'
            });
        } else {
            this.setState({
                labelLegend: 'Hubo un problema intenta de nuevo'
            });
        }
    }

    // Metodo render
    render(){
        return(
            <div>
                <h2>Registro</h2>
                <form onSubmit = {this.onSubmit}>
                    <FormRow
                        inputType  = "Text"
                        labelText  = "Nombre"
                        isRequired = {true}
                        ref        = "nombre"
                    />
                    <FormRow
                        inputType  = "Text"
                        labelText  = "Apellidos"
                        isRequired = {true}
                        ref        = "apellidos"
                    />
                    <FormRow
                        inputType  = "email"
                        labelText  = "Correo Electronico"
                        isRequired = {true}
                        ref        = "email"
                    />
                    <FormRow
                        inputType  = "password"
                        labelText  = "Password"
                        isRequired = {true}
                        ref        = "password"
                    />
                    <FormRow
                        inputType  = "password"
                        labelText  = "Confirmar Password"
                        isRequired = {true}
                        ref        = "confirm_password"
                    />
                    <button>Registro</button>
                    <label>{this.state.labelLegend}</label>
                </form>
            </div>
        );
    }
}

export default Form;
