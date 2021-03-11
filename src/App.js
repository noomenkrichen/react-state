
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    fullName: "Noomen Krichen",
    bio: "I like coding",
    imgSrc: "pic.jpg",
    profession: "Web developer",
    hide: true
  }

  handleClick = () => this.setState ({hide:false})

  render() {
    return(
      <>
      <div hidden={this.state.hide} style={{textAlign:"center"}}>
        <h1>My User Profile</h1>
        <img src={this.state.imgSrc} alt="profile"/>
        <p><b>Full Name:</b> {this.state.fullName}</p>
        <p><b>Biography:</b> {this.state.bio}</p>
        <p><b>Profession:</b> {this.state.profession}</p>
      </div>
      <button onClick={this.handleClick}>Show my profile</button>
      </>
    )
  }
}

export default App;
