import React, { Component } from 'react';
import Toolbar from "../../tools/Toolbar";
import Modes from "../../../controller/ToolbarModes";
import Css from "../../../style/canvas.scss"
import { Stage, Layer, Text } from 'react-konva';
import ColoredRect from  "../figures/canvas/ColoredDot"

class CanvasField extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode: Modes.none,
    }
  }

  addNewDot(){

  }

  handleClick(){
    switch (this.state.mode) {
      case Modes.btn:
        break;
      case Modes.line:
        break;
    }
  }

  render() {
    return (
        <div className='row'>
          <Toolbar/>
          <div className='mainField col-12' id='mainField'>
            <div className='photoContainer'>
            </div>
            <div className='canvasContainer' onClick={this.handleClick.bind(this)}>
              <div className='coordinates'/>
              <div className='figures'>
                  <Stage width={400} height={400}>
                    <Layer>
                      <Text text="Try click on rect" />
                      <ColoredRect />
                    </Layer>
                  </Stage>
                {/*{this.props.dots}*/}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CanvasField;
