import React, {Component} from 'react';

class ToolBtn extends Component {
  constructor(props){
    super(props);
    this.state = {
      active : false
    }
  }
  handleClick(){
    this.setState({
      active: true
    })
  }

  render() {
    let hasPopover = this.props.popoverText ? this.props.popoverText : '';
    let popover = '';
    if(hasPopover){
      popover  = (
          <div className='popover fade bs-popover-bottom'>
            <div className='arrow'/>
            <div className='popover-body'> {this.props.popoverText}</div>
          </div>
      );
    }
    let btnClasses = 'Toolbar-btn ';
    if(this.state.active){
      btnClasses+="active"
    };
    return (
        <div className={btnClasses} >
          <button className={this.state.active} onClick={this.handleClick.bind(this)}/>
          {popover}
        </div>
    );
  }
}

export default ToolBtn;