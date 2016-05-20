
var model = (function() {
    var dots = new Object();
    var lines = new Object(); 
   
     
    function  parseDotsToText(dotA, dotB){    
        return dotA.prop("name") + dotB.prop("name") ;
    }; 
    
    function reverseText(text){
        var result = ""; 
        console.log("in reverse " + text);
        for (var i = text.length - 1; i >= 0; i--) {
           result = result + "" + text.charAt(i) ; 
        }
        return result;        
    }
    function addLine (line){
        console.log("in add line " + line);
        lines[line.name] = line; 
        lines[line.alias] = line;
    }

// методы доступные извне
    return { 
        
      parseTextToDots : function (text){      
        var array = [];
        for (i = 0; i < text.length; i++) {
            var name = text.charAt(i);
            array[i] = dots[name];
        }         
        return array;
      },  
      
      
      getNameByDot : function($dot){  
          for(var prop in dots) {
            if (dots[prop] === $dot){
                  return prop; 
              }
          }
      },
      containsDot : function(name) {
          return dots[name]; 
      },
      removeDot : function(name){
          delete dots[name]; 
      }, 
      addDot : function(name, $dot){
        dots[name] = $dot ;
    
      },
      printAllDots : function(){
        console.log("current vault state: ");
        console.log(dots);
       // console.log(dots);
      },
      
///Lines functions
         
      
      printAllLines : function(){
        console.log("current line state: ");
        console.log(lines);
       // console.log(dots);
      },
      
      createLineFromArray : function(dotArray){
          if(isLineExist()) return isLineExist(); 
          var line = new Line(dotArray[0], dotArray[1]);
          addLine(line); 
      }, 
      createLineFromDots : function(dotA, dotB){
          var name = parseDotsToText(dotA, dotB); 
          var isExist = model.getLineByName(name); 
          
          if(isExist) return model.getLineByName(name); 
          
          var line = new Line(dotA, dotB);
          addLine(line); 
      },
      getLineByName :  function (text){
          var alias = reverseText(text); 
          if (lines[text] || lines[alias]) return lines[text] || lines[alias]; 
      },
      getLineLengthByName : function(text){
          var line = model.getLineByName(text); 
         // console.log("logline "  + line);
          return line.length; 
      },
      
      getLineByDot : function (text){
          
      },
      renameLines : function(oldDotName){
     	 $.each( lines, function(name, val){ if (name.indexOf(oldDotName) !== -1) {
     	  		val.reName(); addLine(val);  delete lines[name]; 
     		}
     	} )
 		 
      
    	}
    }
}() );
