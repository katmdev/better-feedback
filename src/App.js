import React, {Component, Fragment} from 'react';
import firebase from './firebase.js';
import Feelings from './Feelings.js';
import Modal from './Modal.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feelings: [],
      displayModal: false,
      displayForm: false
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newFeelings = [];
      const data = response.val();
      for(let key in data) {
        let results = data[key];
        newFeelings.push({
            feeling: results.userFeeling, 
            team: results.userTeam,
            id: key,
            info: results.userInfo
        })
        }
        this.setState({
          feelings: newFeelings
        })
    })
  }
  handleModal = (e) => {
    e.preventDefault();
    this.setState({displayModal: !this.state.displayModal})
  }
  handleForm = (e) => {
    e.preventDefault();
    this.setState({displayForm: true})
  }
  handleMoreInfo = (e) => {
    e.preventDefault();
    this.setState({displayForm: false})
  }
  
  render() {
    return(
      <Fragment>
        <header>
          <div className="wrapper head">
            <h1>Better Feedback</h1>
            <button onClick={(e) => {this.handleModal(e); this.handleForm(e)}}>Add Feedback</button>
          </div>
        </header>
        <main>
          {this.state.displayModal ? <Modal handleModal={this.handleModal} displayForm={this.state.displayForm}/> : null}
          <Feelings feelings={this.state.feelings} handleModal={this.handleModal} handleMoreInfo={this.handleMoreInfo}/>
        </main>
        <footer>
          <div className="wrapper foot">
            <p><a href="https://katm.dev">Kat DeVrieze</a> 2020</p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App;
