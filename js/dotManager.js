var DotManager = (function() {
    
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
    var dotHTML = '<div class = "dot"><div class="dot centerOfdot"></div></div>'; 
    var dotsToLine; 
    function makeLine($elt){
      console.log("in makeline");

      /* dotsToLine.css("background-color", "blue");
       $elt.css("background-color", "blue");

       var canvasPanel = document.getElementById("canvasPanel"),
     
       ctx = canvasPanel.getContext('2d');
       ctx.beginPath();
       ctx.fillStyle = "orange";
       ctx.lineWidth = 6; 
       ctx.moveTo(dotsToLine.data("x"), dotsToLine.data("y")); 
       ctx.lineTo($elt.data("x"), $elt.data("y"));
       ctx.stroke(); */

       var canvasPanel = document.getElementById("canvasPanel"),
       
       ctx = canvasPanel.getContext('2d');
       
       ctx.beginPath();
       ctx.strokeStyle = "blue";
       ctx.lineWidth = 1; 
       ctx.moveTo(1,1); 
       ctx.lineTo(55, 55);
       ctx.fill(); 
       ctx.strokeRect(100, 100, 2, 2);
       // ctx.moveTo(dotsToLine.data("x"), dotsToLine.data("y")); 
       // ctx.lineTo($elt.data("x"), $elt.data("y"));
       ctx.stroke(); 

       ctx.fillStyle = "gray"; 
       ctx.fillRect(105, 105, 14, 14);
  
       ctx.font = '24px "Tahoma"';
        ctx.fillText("Hello World!", 0, 0);
        ctx.beginPath();
        ctx.fillStyle = "pink"; 
        ctx.moveTo(20, 50);
        ctx.lineTo(220, 80);
        ctx.quadraticCurveTo(150, 100, 260, 170);
        ctx.closePath();

       dotsToLine = undefined; 
    }
    function activate($elt){
        $elt.css("background-color", "red");   
        dotsToLine = $elt;
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
                  "top" : (centerY - 5) + "px",
        }).prependTo(evt.target); 
         
        $elt.data({"x": centerX, "y": centerY})   
        $elt[0].id = $elt.data("x") + "x" + $elt.data("y"); ; 
       // console.log("id " + $elt[0].id)

        $elt.contextmenu(function(evt){ 
           dotMenu.$currentDot = $elt;    
        // console.log("dot" + dotMenu.$currentDot);
          showElement(dotMenu.$menu, $elt.data("x") + 10, $elt.data("y") - 40 );  
          dotMenu.$inputForm[0].focus();   
          evt.stopPropagation();          
        });

        $elt.on("click", function(evt){
       //   console.log("in click on dot" + evt.target.firstChild);
            var realTarget = $(evt.target.firstChild || evt.target );
          //  console.log(dotsToLine.unshift(realTarget) === 2);
            dotsToLine ? makeLine(realTarget) : activate(realTarget);        
            evt.stopPropagation(); 
        }); 
         //todo          
        $elt[0].draggable = true; 
        $elt[0].ondragstart = function(evt){
        var dt = evt.dataTransfer; 
        };
      },

      setNameToDot : function($elt, eltName){
        $('<div class = "dotName"><p class = "cellText">'+ eltName + '</p></div>').css({
                    "left": (- 15) + "px",
                    "top" : (- 15) + "px",
                    "display" : "block", 
        }).appendTo($elt); 
          
        $elt.attr("name", eltName); 
        $elt[0].name = eltName; 
         // console.log("name " + $elt[0].name + $elt.attr("name"));
      }, 
      
      changeTextToDot : function($elt, eltName){
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
