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
      noteName: ''
    }
  }

  handleChange(e) {
    this.setState ({
      noteName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let note = {
      noteName: this.state.noteName
      // console.log(this.state.note);
    }
    this.props.addNote(note);
  }

  listView(data, index) {
    return (
      <div>
        <div>
        <li key={index}>{data.noteName}</li>
      </div>
      <div>
        <button onClick={(e) => this.deleteNote(e, index)}> Delete </button>
      </div>
    </div>
    )
  }

  deleteNote(e, index) {
    e.preventDefault();
    this.props.deleteNote(index);
  }

  render() {
  
    return (
      <div>
        <h1>Ben's KISS/Non-fluffy Attempt/Version 2.0 Note App</h1>

      <div>
        <h3>Take a Note!</h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} /><br />
          <input type="submit" value="ADD" />
        </form>
        <br />
        <ul>
          {this.props.notes.map((note, i) => this.listView(note, i))}
        </ul>
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
    addNote: note => dispatch(noteAction.addNote(note)),
    deleteNote: index => dispatch(noteAction.deleteNote(index)) 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

