import React, { Component } from 'react';
import '../../style/dot.scss';

class Dot extends Component{

  constructor(props){
    super(props);
    this.state = {
      isActive: false
    }
  }


  render(){
    let classes = "dot dot-normal";
    if(this.state.isActive){
      classes+= " active";
    }
    return (
        <div className={classes}>

        </div>
    )
  }
}