import React, {Component, Fragment} from 'react';
import Form from './Form';
import MoreInfo from './MoreInfo';

class Modal extends Component {

  render() {
      return(
        <Fragment>
            <div className="modal">
                <div className="modal__foreground">
                    <button className="modal__close" onClick={this.props.handleModal}>CLOSE</button>
                    {this.props.displayForm ? <Form handleModal={this.props.handleModal}/> : <MoreInfo/>}
                </div>
            </div>
        </Fragment>
      )
   }
}

export default Modal;
