import Modes from "../components/tools/toolbar/ToolbarModes";
import DotModel from "../model/DotModel";

let initialCanvasState = {
  toolbar: {
    mode: Modes.none
  },
  canvas: {
    figures: {
      dots: {
        list: [],
        defaultDot: new DotModel(20, 20, 10, 10, 'green', false)
      },
      lines: []
    }
  },
};

export default initialCanvasState;