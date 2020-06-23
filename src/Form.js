import React, {Component, Fragment} from 'react';

class Form extends Component {
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
            <h2>HELLO I AM FORM</h2>
            <hr/>
            <form action="">
                <input type="text" placeholder="TEAM"/>
                <input type="text" placeholder="FEELING"/>
                <input type="text" placeholder="WHY"/>
                <input type="checkbox" name="" id=""/>
                <button>SUBMIT</button>
            </form>
          </Fragment>
      )
   }
}

export default Form;
