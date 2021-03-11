
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    fullName: "Noomen Krichen",
    bio: "I like coding",
    imgSrc: "pic.jpg",
    profession: "Web developer",
    hide: false
  }

  handleClick = () => this.setState ({hide:!this.state.hide})

  render() {
    return(
      <div className="App" >
        <div hidden={this.state.hide} >
          <h1>My User Profile</h1>
          <img src={this.state.imgSrc} alt="profile"/>
          <p><b>Full Name:</b> {this.state.fullName}</p>
          <p><b>Biography:</b> {this.state.bio}</p>
          <p><b>Profession:</b> {this.state.profession}</p>
        </div>
        <button onClick={this.handleClick}>Click here to hide or show my profile</button>
      </div>
    )
  }
}

export default App;
