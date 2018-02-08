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
            this.props.notes, notes => <li className="list-group-item" key={notes.id}> {notes.title} </li>
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
                <h3>NOTES</h3>
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