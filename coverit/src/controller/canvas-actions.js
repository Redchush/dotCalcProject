
let CanvasActions = function() {
  let names = {
    addNewDot: 'addNewDot',
    addNewLine: 'addNewLine'
  };
  let actions = {
    actionCanvasAddNewDot : {
      type: CanvasActions.addNewDot,
      payload: {}
    },
    actionCanvasAddNewLine : {
      type: CanvasActions.addNewLine,
      payload: {}
    }
  };

  return {
    names: names,
    actions: actions
  }

}();

export default CanvasActions;

