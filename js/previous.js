function createDot(evt, this_ ){
    
    var dotMenu = new DotMenu(); 
    var centerX = evt.pageX  - $(this_).offset().left; 
    var centerY = evt.pageY  - $(this_).offset().top; 
    if (  $(".dot").toArray().some(function(elt) {
                return isRectIntersect(elt, centerX-5, centerY-5, centerX+5, centerY+5)
           })) 
    	{
               evt.stopPropagation(); 
               return; 
    	}   

    var elt =  $('<div class = "dot"></div>').css({
              "left": (centerX - 5) + "px",
              "top" : (centerY - 5) + "px",
    }).appendTo(evt.target); 
  
   
    elt.data({"x": centerX, "y": centerY})   
    var dotTitle = "x" + elt.data("x") + "x" + elt.data("y"); 

    elt[0].id = dotTitle; 
    console.log("id " + elt[0].id)

    elt.dblclick(function(evt){ 
    //	logCurrentEvent(evt);
    	dotMenu.data("dot",elt[0].id);
    	currentDot(elt[0]).set(); 
        showElt(dotMenu, elt.data("x") + 10, elt.data("y") - 40 );  
        evt.stopPropagation();     
    });

 //todo          
    elt[0].draggable = true; 
    elt[0].ondragstart = function(evt){
    var dt = evt.dataTransfer; 
    }
}

function setNameToDot(eltId, eltName){
	var string  = "#" + eltId; 
	var dot = document.getElementById(eltId);
   	dot.name = eltName; 
    console.log(dot.name);
    console.log("x " + $(dot).data("x"));
    $('<div class = "dotName"><p class = "cellText">'+ eltName + '</p></div>').css({
              "left": (- 15) + "px",
              "top" : (- 15) + "px",
              "display" : "block", 
    }). appendTo(dot); 
}

function currentDot(elt) {
	var dot;
	return {
		get: function() { return dot; },
		set: function() {dot = elt; }
		}
};

/* console.log("by id");                           @why????????
	console.log(document.getElementById(eltId));

    console.log($(string)); 
    console.log($(string).prop("id"));

        console.log(document.getElementById(eltId).id);
 	console.log($(string)); 
    console.log($(string).prop("id"));
    console.log($('div#' + eltId));

    console.log($('div#' + eltId).data("x"));
	console.log($("div#"+eltId).prop("id"));
	console.log($("div#"+eltId).attr('id'));

		var prepare = "div[title='" + eltId + "']"; 
	console.log(prepare + ":" + eltId + " " + eltName);
    */
