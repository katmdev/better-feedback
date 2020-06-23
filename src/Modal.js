import React, {Component, Fragment} from 'react';
import Form from './Form';
import MoreInfo from './MoreInfo';

class Modal extends Component {


//   componentDidMount() {
//   }

//   componentDidUpdate() {
//   }

//   componentWillUnmount() {
//   }
// function Display(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {    return <UserGreeting />;  }  return <GuestGreeting />;}
  render() {
      console.log(this.props)
      return(
        <Fragment>
            <div>
                <h2>HELLO I AM MODAL</h2>
                <div>
                {this.props.displayForm ? <Form/> : <MoreInfo/>}
                </div>
            </div>
        </Fragment>
      )
   }
}

export default Modal;
