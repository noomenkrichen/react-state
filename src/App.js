
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    fullName: "Noomen Krichen",
    bio: "I like coding",
    imgSrc: "img/pic.jpg",
    profession: "Web developer",
    show: true
  }

  handleClick = () => this.setState ({show:!this.state.show});

  render() {
    //console.log(this.state.show);
    return(
      <div className="App" >
        <h1>My User Profile</h1>
        {
          this.state.show && 
          <div>
            <img src={this.state.imgSrc} alt="profile"/>
            <p><b>Full Name:</b> {this.state.fullName}</p>
            <p><b>Biography:</b> {this.state.bio}</p>
            <p><b>Profession:</b> {this.state.profession}</p>
          </div>
        }
        
        <button onClick={this.handleClick}>Click here to hide or show my profile</button>
      </div>
    )
  }
}

export default App;
