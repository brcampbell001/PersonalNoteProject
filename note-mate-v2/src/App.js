import React, { Component } from 'react';

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
    console.log(this.state.note);
  }

  render() {
    let note;
    return (
      <div>
        <h1>Ben's KISS/Non-fluffy Attempt/Version 2.0 Note App</h1>
        <hr/>
        {/* <ul>
              {this.props.notes.map((note, i) => <li key={i}>{note.name}</li>)}
        */}

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

export default App;
