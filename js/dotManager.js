/* global model, dotMenu, Initialisator */

var DotManager = (function() {
  var dotHTML = '<div class = "dot borderOfdot"><div class="dot centerOfdot"></div></div>'; 

  var $savedDot; 
 {
    var canvasPanel = document.getElementById("canvasPanel"); 
    var ctx = canvasPanel.getContext('2d');

  }
     
   function isRectIntersect(eltA, bx, by, bx1, by1){
      var a = parseToFourCoordinateRelative(eltA); 
      // console.log(a.y > by1 || a.y1 < by || a.x1 < bx || a.x > bx1);
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
  //  var $elt =  $('<div class = "dot"><div class="dot centerOfdot"></div></div>'); why?????


    function makeLine($elt){
      console.log("in makeline");
      $savedDot.css("background-color", "blue");
      $elt.css("background-color", "blue");
      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 1.5; 
      ctx.moveTo($savedDot.data("x"), $savedDot.data("y")); 
      ctx.lineTo($elt.data("x"), $elt.data("y"));
      ctx.stroke(); 
      
      Controller.createLineFromDots($elt.parent(), $savedDot.parent()); 
      $savedDot = undefined; 
    }

    function activate($elt){
        $elt.css("background-color", "red");   
        $savedDot = $elt;
    }
    function changeColor($elt, color){

    }

    return { // методы доступные извне   
        createDot : function(evt, this_ ){
    //  var dotMenu = new DotMenu();     
            var centerX = evt.pageX  - $(this_).offset().left; 
            var centerY = evt.pageY  - $(this_).offset().top; 

            if (  $(".dot").toArray().some(function($elt) {
               return isRectIntersect($elt, centerX-5, centerY-5, centerX+5, centerY+5);
                })) 
            {
                evt.stopPropagation(); 
                return; 
            }   
            var $elt =  $(dotHTML).css({
                      "left": (centerX - 5) + "px",
                      "top" : (centerY - 5) + "px"
            }).prependTo(evt.target); 

            $elt.children().andSelf().data({"x": centerX, "y": centerY}) ;  
            $elt[0].id = $elt.data("x") + "x" + $elt.data("y"); 
           // console.log("id " + $elt[0].id)

            $elt.contextmenu(function(evt){ 
                dotMenu.$currentDot = $elt;    
                Initialisator.showElement(dotMenu.$menu, $elt.data("x") + 10, $elt.data("y") - 40 );  
                dotMenu.$inputForm[0].focus();   

                evt.preventDefault();  
                evt.stopPropagation();   

            });

            $elt.on("click", function (evt) {
                //    console.log("in click on dot" + evt.target.firstChild + " button " + evt.button);
                var dotCenter = $(evt.target.firstChild || evt.target);
                $savedDot ? makeLine(dotCenter) : activate(dotCenter);
                evt.stopPropagation();
            });
            //todo          
            $elt[0].draggable = true;
            $elt[0].ondragstart = function (evt) {
                var dt = evt.dataTransfer; 
        };
      },

      printDotName : function($elt, eltName){
        $('<div class = "dotName"><p class = "cellText">'+ eltName + '</p></div>').css({
                    "left": (- 15) + "px",
                    "top" : (- 15) + "px",
                    "display" : "block" 
        }).appendTo($elt);         
        $elt.attr("name", eltName); 
        $elt[0].name = eltName; 
         // console.log("name " + $elt[0].name + $elt.attr("name"));
      }, 
      
      changeDotText : function($elt, eltName){
        $elt.attr("name", eltName).children(".dotName").text(eltName); 
      }
    };
}());








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
