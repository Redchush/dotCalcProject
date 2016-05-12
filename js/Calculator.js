var dotVaul = (function() {
    var dotInstance; 
    var dots = new Object();
    var lines = new Object(); 
    $(".calcButtom").on("click", $clickCalcHandle); 
    var $inputCalcForm = $(".calcInput"); 

    function $clickCalcHandle(evt){
        console.log("in submit form table");
        var text = $inputCalcForm.val(); 
        var array = parseTextToDots(text); 
        var func = chooseFunction($(".calcType").val()); 

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
          function lineLength (dotArray, text){
            var alias = reverseText(text);
            if (lines[text] || lines[alias]) return lines[text] || lines[alias]; 
           
            var line = new Line(dotArray[0], dotArray[1]);
            setLine(line)
          /*  lines[line.name] = line.length; 
            lines[line.alias] = line.length; */
            console.log(lines);
            return line.length; 
          } 
    }
    
    function reverseText(text){
        var result = ""; 
        for (var i = text.length - 1; i >= 0; i--) {
           result = result + text.charAt(i); 
        }
        return result;
            
    }

    function parseTextToDots(text){
      var array = [];
      for(i = 0; i < text.length; i++){
          var name = text.charAt(i); 
          array[i] = dots[name]; 
      }
      return array; 
    }
    function addLine(line){
            lines[line.name] = line.length; 
            lines[line.alias] = line.length; 
    }

// методы доступные извне
    return { 
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
      },

      addLine : function(line){
         return addLine(line); 
      }

    };

}());

 /* 
 function $clickCalcHandle(evt){
        console.log("in submit form table");
        var array = parseTextToDots($inputCalcForm.val()); 
        var coorArray = parseToCoordArray(array); 

        var sign = chooseFunction($(".calcType").val()); 
        console.log("type " + $(".calcType").val() + " CoordArray " + coorArray);
      //  console.log(coorArray); 
     
        var result = applyFunction(sign, coorArray); 
        console.log(result);
    }

 function lineLength (dotArray){
       //   console.log(" in lineLength " + array + " " + array[3] );

          function subAndPow(a, b){
             return Math.pow(a - b, 2); 
          }
       //  return Math.sqrt(subAndPow(array[0], array[2]) + subAndPow(array[1], array[3])); 
          return Math.sqrt(subAndPow(dotArray[0].data("x"), dotArray[1].data("x")) +
          subAndPow(array[1], array[3])); 
      }

        function parseTextToDots(text){
            var array = [];
            for(i = 0; i < text.length; i++){
                var name = text.charAt(i); 
                array[i] = dots[name];          
            }
            console.log("picked dots " + array);
            return array; 
        }

        function parseToCoordArray(dotArray){
            var array = []; 
            for (var i = 0, j = 0; i < dotArray.length; i++, j = j+2) {
                array[j] = dotArray[i].data("x"); 
                array[j+1] = dotArray[i].data("y"); 
            }
          return array; 
        } */