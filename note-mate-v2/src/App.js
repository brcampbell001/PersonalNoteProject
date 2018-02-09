import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as noteAction from './actions/noteAction';

// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      note: ''
    }
  }

  handleChange(e) {
    this.setState ({
      note: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let note = {
      note: this.state.note
      // console.log(this.state.note);
    }
    this.props.addNote(note);
  }

  render() {
    let note;
    return (
      <div>
        <h1>Ben's KISS/Non-fluffy Attempt/Version 2.0 Note App</h1>
        <hr/>
        { <ul>
              {this.props.notes.map((note, i) => <li key={i}>{note.name}</li> )}
          </ul>
        }

      <div>
        <h3>Add Note Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: note => dispatch(noteAction.addNote(note))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);