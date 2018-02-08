import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewNotes extends Component {
    renderField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>
                    {field.label}
                </label>
                <input className="form-control" type="text" {...field.input} />
                <div className='text-help'>
                    { touched ? error : ''}
                </div>
            </div>
        ) 
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props; // passed by redux-form
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Note Title'
                    name='title'
                    component={this.renderField}
                />
                <Field label='Category' name='categories' component={this.renderField} />
                <Field
                    label='Note Content'
                    name='content'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-success'>
                    Submit Note
                </button>
                </form>
        );
    }
}

export default reduxForm({
    form: 'NewNotesForm' // form name
})(NewNotes);