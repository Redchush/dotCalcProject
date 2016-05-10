var dotVaul = (function() {
    var dotInstance; 
    var dots = new Object();
    $(".calcButtom").on("click", $clickCalcHandle); 
    var $inputCalcForm = $(".calcInput"); 

    function $clickCalcHandle(evt){
        console.log("in submit form table");
        var array = parseTextToDots($inputCalcForm.val()); 
        var sign = chooseFunction($(".calcType").val()); 
        console.log(sign);
    }
    function parseTextToDots(text){
        var array = new Array(); 
     
        console.log(text + " " + text.length);
        for(i = 0; i < text.length; i++){
            var name = text.charAt(i); 
            console.log(name);
            array[i] = dots[name]; 
            console.log(array[i]);
        }
        console.log("picked dots");
        console.log(array);
        return array; 
    }
    function chooseFunction(val){
        switch (val) {
                    case "angle":
                         // statements_1
                         break;
                    case "length":
                         // statements_1
                         break;
                    case "square":
                         // statements_1
                         break;              
                    default:
                         // statements_def
                         break;
                 };
      function angleGrad(){

      } 
      function square(){
          
      } 
      function lenght(a, b){
          
      }                        
    }
    function parseToCoordArray(){
        
      return {
          x : $(elt).position().left, 
          y : $(elt).position().top,
          x1 : $(elt).position().left + elt.offsetWidth,
          y1 : $(elt).position().top + elt.offsetHeight 
        };
    } 
    }


    return { // методы доступные извне
     
        getNameByDot : function($dot){  
            for(prop in dots) {
                console.log(dots[prop] === $dot);
                if (dots[prop] === $dot){
                    return prop; 
                }
            }
        },
        contains : function(name) {
            return dots[name]; 
        },
        removeDot : function(name){
            delete dots[name]; 
        }, 
        setDot : function(name, $dot){
          dots[name] = $dot ;
      
        },
        print : function(){
          console.log("current vault state: ");
          console.log(dots);
        }

    };

}());

