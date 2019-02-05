import React, { Component } from 'react';

import {
    Button,
    TextField
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

import boxError from '../../styles/components/messageBox/errorBox';

class MusicCreateForm extends Component {

    renderError = ({ touched, error }) => {
        if(touched && error)
            return <div style={boxError}>{error}</div>
    };

    renderInputs = ({input, label, meta}) => {
        const error = this.renderError(meta);
        return(
            <div>
                <TextField
                    autoFocus={input.name === 'musicName' ? true : false}
                    type="text" 
                    error={error ? true : false}
                    margin="dense"
                    id={input.name}
                    name={input.name}
                    label={label}
                    fullWidth
                    variant="outlined"
                    {...input}
                    autoComplete="off"
                />
                {error}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field component={this.renderInputs} name="musicName" label="Nome da Música" />
                    <Field component={this.renderInputs} name="musicAuthor" label="Autor" />

                    <Button type="submit" size="large" fullWidth variant="contained" color="primary" >
                        Adicionar
                    </Button>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.musicName) errors.musicName = "O nome da música é obrigatório!";

    if(!formValues.musicAuthor) errors.musicAuthor = "O autor da música é obrigatório!";

    return errors;
};

export default reduxForm({
    form: 'createMusicForm',
    validate
})(MusicCreateForm);