import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNotes, deleteNote } from '../actions';
import { Link } from 'react-router-dom';

class ShowNotes extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.showNotes(id); 
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deleteNote(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { note } = this.props;

        if (!note) {
            return <div> Processing...</div>;
        }

        return (
            <div>
                <Link to='/'>Back to Home</Link>
                <button className="btn btn-danger pull-xs-right"
                onClick={() => this.onDeleteClick()}
                >Delete Note</button>
                <h3>{note.title}</h3>
                <h6> Categories: { note.categories }</h6>
                <p>{ note.content }</p>
            </div>
        );
    }
}

const mapStateToProps = ({ notes }, props) => {
    return {
        note: notes[props.match.params.id]
    };
}

export default connect(mapStateToProps, { showNotes, deleteNote })(ShowNotes);