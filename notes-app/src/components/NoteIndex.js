import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchNotes } from '../actions';

class NoteIndex extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    renderNotes() {
        return _.map(
            this.props.notes, note => <li className="list-group-item" key={note.id}> {note.title} </li>
        )
    }
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/notes/new'>
                        Add Note
                    </Link>
                </div>
                <h2>NOTES</h2>
                <ul className="list-group">
                    {this.renderNotes()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, {fetchNotes})(NoteIndex);