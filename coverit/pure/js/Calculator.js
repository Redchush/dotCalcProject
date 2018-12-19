
/* global model */

var Calculator = (function() {
    var dotInstance; 
//    var dots = new Object();
//    var lines = new Object(); 
    $(".calcButtom").on("click", $clickCalcHandle); 
    var $inputCalcForm = $(".calcInput"); 

    function $clickCalcHandle(evt){
        console.log("in submit form table");
        var text = $inputCalcForm.val(); 
      
        var func = chooseFunction($(".calcType").val()); 
        var array = model.parseTextToDots(text); 
        
        var result = applyFunction(func, array, text); 
        console.log(result);
    }
    
    function applyFunction(func, array, text){
        return func(array, text); 
    }
    function chooseFunction(val){
        switch (val) {
                    case "angle":
                          return  lineLength;                 
                    case "length":
                          return  lineLength;     
                    case "square":
                         return  lineLength;   
                         
                    default:
                         // statements_def
                         break;
                     }
          function angleGrad(array){
            
          } 

          function square(){
              
          } 
          function lineLength (array, text){       
            return model.getLineLengthByName(text);  
          } 
    }
    
    

    
    
    
// методы доступные извне
    return { 
      

    };

}());
