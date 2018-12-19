import React, {Component} from 'react';
import Css from '../../style/toolbar.scss'
import DotBtn from "./toolbar/DotBtn";
import ToolBtn from "./toolbar/ToolBtn";
import ToolbarModes from "../../controller/ToolbarModes";

class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : ToolbarModes.none
    }
  }

  modeChanged(mode) {
    this.setState({
      mode: mode
    })
  }

  render() {
    return (
        <div className='Toolbar col-12'>
          <div className="Toolbar-content">

            <DotBtn/>
            <ToolBtn alt='Create new dot mode' name='dotBtn' active={false} popoverText='popoverText'/>
            <ToolBtn alt='Create new line mode' name='lineBtn' active={false}/>
          </div>
        </div>
    );
  }
}

export default Toolbar;