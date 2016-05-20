

/* global model, DotManager*/

var Controller = ( function() {
      

   return {
        setNameToDot : function($dot, text) {
            if (!model.containsDot(text)) {
                var sameDotName = model.getNameByDot($dot); 
                if (sameDotName) { 
                    model.removeDot(sameDotName); 
                    DotManager.changeDotText($dot, text); 

                    model.renameLines(sameDotName); 
                } else  DotManager.printDotName($dot, text);
                
            model.addDot(text, $dot);
          
          
            } else  alert("exitst yet!");
            
            
        },
        createLineFromDots : function ($dotA, $dotB){
            model.createLineFromDots($dotA, $dotB); 
        }
            
   };
   
}()); 


