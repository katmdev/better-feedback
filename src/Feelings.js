import React, {Component, Fragment} from 'react';
import './App.css';

class Feelings extends Component {
//   constructor() {
//       super();
//   }

//   componentDidMount() {
//   }

//   componentDidUpdate() {
//   }

//   componentWillUnmount() {
//   }

  render() {
      return(
        <Fragment>
            <h2>HELLO FEELINGS</h2>
            <button onClick={(e) => {this.props.handleModal(e); this.props.handleMoreInfo(e)}}>I'm a feeling</button>
        </Fragment>

      )
    //   <Feelings handleDescription={() => this.handleDescription(index)}/>
   }
}

export default Feelings;
