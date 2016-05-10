
function createDot(evt, this_ ){
    var dotMenu = new DotMenu();
    
    var centerX = evt.pageX  - $(this_).offset().left; 
    var centerY = evt.pageY  - $(this_).offset().top; 
    if (  $(".dot").toArray().some(function($elt) {
       return isRectIntersect($elt, centerX-5, centerY-5, centerX+5, centerY+5);
        })) 
    {
        evt.stopPropagation(); 
        return; 
    }   
    var $elt =  $('<div class = "dot"><div class="dot centerOfdot"></div></div>').css({
              "left": (centerX - 5) + "px",
              "top" : (centerY - 5) + "px",
    }).prependTo(evt.target); 
     
    $elt.data({"x": centerX, "y": centerY})   
    var dotTitle = "x" + $elt.data("x") + "x" + $elt.data("y"); 
    $elt[0].id = dotTitle; 
    console.log("id " + $elt[0].id)

    $elt.dblclick(function(evt){ 
    	logCurrentEvent(evt);
    	dotMenu.$currentDot = $elt;    
		console.log("dot" + dotMenu.$currentDot);
        showElement(dotMenu.$menu, $elt.data("x") + 10, $elt.data("y") - 40 );  
        dotMenu.$inputForm[0].focus();
        evt.stopPropagation();     
    });
    $elt.on("click", function(evt){
    	console.log("in click on dot" + evt.target.firstChild);
        $(evt.target.firstChild).css("background-color", "red");
    }); 
    $(".centerOfdot").on("click", function(evt){
          evt.target.parentNode.click(); 
    }); 
 //todo          
    $elt[0].draggable = true; 
    $elt[0].ondragstart = function(evt){
    var dt = evt.dataTransfer; 
    };
}

function setNameToDot($elt, eltName){
	$('<div class = "dotName"><p class = "cellText">'+ eltName + '</p></div>').css({
              "left": (- 15) + "px",
              "top" : (- 15) + "px",
              "display" : "block", 
    }).appendTo($elt); 
    
    $elt.attr("name", eltName); 
    $elt[0].name = eltName; 
    console.log("name " + $elt[0].name + $elt.attr("name"));
}

function changeTextToDot($elt, eltName){
	$elt.attr("name", eltName).children(".dotName").text(eltName); 

}

function isRectIntersect(eltA, bx, by, bx1, by1){
 var a = parseToFourCoordinateRelative(eltA); 
 console.log(a.y > by1 || a.y1 < by || a.x1 < bx || a.x > bx1);
 return !(a.y > by1 || a.y1 < by || a.x1 < bx || a.x > bx1);
}

function parseToFourCoordinateRelative(elt){
  return {
      x : $(elt).position().left, 
      y : $(elt).position().top,
      x1 : $(elt).position().left + elt.offsetWidth,
      y1 : $(elt).position().top + elt.offsetHeight 
    };
}



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
