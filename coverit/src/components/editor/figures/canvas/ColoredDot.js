import React, { Component } from 'react';
import Konva from 'konva';
import DotModel from '../../../../model/DotModel';
import { Circle} from 'react-konva';

class ColoredDot extends Component {

  constructor(props){
    super(props);
    this.state = DotModel(20, 20, 10, 10, 'green');
  }
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

  handleDragEnd = e => {
    this.setState({
      x: e.target.x() + 10,
      y: e.target.y()
    });
  };

  render() {
    return (
        <Circle
            draggable
            x={this.state.x}
            y={this.state.y}
            width={this.state.width}
            height={this.state.height}
            fill={this.state.color}
            onClick={this.handleClick}
            onDradEnd={this.handleDragEnd}
        />
    );
  }
}
export default ColoredDot;