import React, {Component} from 'react';

class Feelings extends Component {
    constructor() {
        super();
        this.state = {
            classNames: [
                "feelings-small",
                "feelings-medium",
                "feelings-big"
            ]
        }
      }
 
    render() {
    const groupedFeelings = [];
      return(
        <section className="feelings">
            <div className="wrapper">
                <h2>HELLO FEELINGS</h2>
                {this.props.feelings.map((obj) => {
                    const existingFeeling = groupedFeelings[obj.feeling];
                    if(existingFeeling){
                        existingFeeling.push(obj)
                    } else {
                        groupedFeelings[obj.feeling] = [obj];
                    return (<li key={obj.feeling}><button className="feeling-button" onClick={(e) => {this.props.handleModal(e); this.props.handleMoreInfo(e, obj.feeling)}}>{obj.feeling}</button></li> )
                    }
                })
                }
            </div>
        </section>
      )
   }
}

export default Feelings;