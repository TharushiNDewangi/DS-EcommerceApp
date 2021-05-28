import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text : {
      recipient: '',
      textmsg: ''
    }
  }

  sendText = _ => {
    const {text } = this.state;

    //pass text message GET variables via query string
    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin:8
    }

    const textArea = {
      borderRadius: 4
    }

    return (
      <div className="App">
        <div style={{marginTop:10}}>
          <h2>Send text Message</h2>
          <label> Youre Phone number</label>
          <br />
          <input valuer={text.recipient}
          onChange={e => this.setState({ text: { ...text, recipient: e.target.value}})}/>

          <div style={spacer} />

          <label>Message</label>
          <br />

          <textarea rows={3} value={text.textmessage} style={textArea}
          onChange={e =>  this.setState({ text: {...text, textmessage: e.target.value}})}/>
          <br />
          <dic state={spacer} />

          <button onClick ={this.sendText}> Send Text </button>
        </div>
      </div>
    );
  }
}

export default App;