import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import Feelings from './Feelings';
import Modal from './Modal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feelings: [],
      user: {
        team: '',
        feeling: '',
        description: '',
        // figure out how to initially set feeling with boolean
        positive: ''},
      displayModal: false,
      displayForm: false
    }
  }

  componentDidMount() {
    // pull info from database to state on change
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newFeelings = [];
      const data = response.val();
      for(let key in data) {
        newFeelings.push({
          [key]: data[key]
      });
      }
      this.setState({
        feelings: newFeelings
      })
    });
  }
  // componentDidUpdate() {
  // }
  // componentWillUnmount() {
  // }
  handleModal = (e) => {
    e.preventDefault();
    console.log("MODAL");
    this.setState({displayModal: !this.state.displayModal})
  }
  handleForm = (e) => {
    e.preventDefault();
    console.log("FORM");
    this.setState({displayForm: !this.state.displayForm})
  }
  handleInputChange = (e) => {
    console.log("CHANGE")
    // track changes to inputs
    // update changes in state
    // this.setState({
      //   // e.target.name will take name from the item attached to handleChange
      //   //e.target.value this is the javascript equivalent of e.val() in jquery
      //   [e.target.name]: e.target.value,
      // })
      // attach to form inputs in modal
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT")
    // const dbRef = firebase.database().ref();
    // UPDATE user input in firebase from user input values in state (will add to existing objects rather than creating new)
    // clear user input values using this.setState()
    // attach to form submit
  }
  handleMoreInfo = (e) => {
    e.preventDefault();
    console.log("DESCRIPTION")
    this.setState({displayMoreInfo: !this.state.displayMoreInfo})
  }
  
  render() {
    return(
      <Fragment>
        <header>
          <span>
            <h1>Better Feedback</h1>
          </span>
          <button onClick={(e) => {this.handleModal(e); this.handleForm(e)}}>Add Feedback</button>
        </header>
        <main>
          {this.state.displayModal ? <Modal displayForm={this.state.displayForm}/> : null}
          <Feelings name={this.state.feelings} handleModal={this.handleModal} handleMoreInfo={this.handleMoreInfo}/>
        </main>
        {/* // main
          <cloud/> => buttons
          // <modal/> => form (h2, inputs, submit, close), descriptions (h2, ul, description lis w p and resolve button)
        // footer
          // p with a  */}
        <footer>
          <p><a href="https://katm.dev">Kat DeVrieze</a> 2020</p>
        </footer>
      </Fragment>
    )
  }
}

export default App;
