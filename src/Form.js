import React, {Component, Fragment} from 'react';
import firebase from './firebase.js';

class Form extends Component {
  constructor() {
      super();
      this.state = {
        userTeam: '',
        userFeeling: '',
        userInfo: '',
        userPositive: ''
      }
  }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        this.props.handleModal(e);
        e.preventDefault();
        const isPositive = this.state.userPositive === "true" ? true : false;
        this.setState({
            userPositive: isPositive,
        })
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
        this.setState({
            userTeam: '',
            userFeeling: '',
            userInfo: '',
            userPositive: ''
        })
    }
  render() {
      const {userTeam, userFeeling, userInfo, userPositive} = this.state;
      return(
          <Fragment>
            <h2>How are you feeling today?</h2>
            <hr/>
            <form>
                <fieldset onChange={this.handleInputChange} value={userPositive}>
                    <legend htmlFor="userPositive">Is this feeling positive or negative?</legend>
                    <input className="sr-only" type="radio" name="userPositive" id="positive-true" value="true"/>
                    <label className="emoji" htmlFor="positive-true">👍</label>
                    <input className="sr-only" type="radio" name="userPositive" id="positive-false" value="false"/>
                    <label className="emoji" htmlFor="positive-false">👎</label>
                </fieldset>
                <label htmlFor="userTeam">Team:</label>
                <input type="text" name="userTeam" placeholder="Team" value={userTeam} onChange={this.handleInputChange}/>
                <label htmlFor="userFeeling">Your feeling in one word:</label>
                <input type="text" name="userFeeling" placeholder="Feeling" value={userFeeling} onChange={this.handleInputChange}/>
                <label htmlFor="userInfo">What is causing this feeling?</label>
                <input type="text" name="userInfo" placeholder="Why" value={userInfo} onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </form>
          </Fragment>
      )
   }
}

export default Form;
