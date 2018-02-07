import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewNotes extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>
                    {field.label}
                </label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        ) 
    }

    render() {
        return (
            <form>
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
                </form>
        );
    }
}

export default reduxForm({
    form: 'NewNotesForm' // form name
})(NewNotes);