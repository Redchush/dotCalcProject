

/* global model */

filldotNames(); 

function filldotNames(){ 

	var panel =	$("#paintingPanel")[0]; 
	var form =  $(".inputChar"); 	 

	var e3 = new MouseEvent("click", {
		 buttom: 4
	});

	function getMouseEvent(x, y){
        return new MouseEvent("click", {
		  bubbles: true,
		  cancelable: true,
		  clientX: x,
		  clientY: y
		});
	}
	
	function getKeyBoarEvent(code){
		return new KeyboardEvent("keypress", {
		 keyCode : code, 
		 charCode: code
	   });
	}
	function initialiseDot(dot, code){
		dot.contextmenu();
	//	console.log("start pressing");
	
		form[0].dispatchEvent(getKeyBoarEvent(code)); 
		form.val( String.fromCharCode(code));
		$('.buttom-container').click(); 
	}

 
    function showSlow(fun){
    	var towait = window.setTimeout(fun, 10500); 
    }

    window.setTimeout( 
			function(){
		//	console.log("in setTimeout ");
			panel.dispatchEvent(getMouseEvent(200, 200)); 
			panel.dispatchEvent(getMouseEvent(300, 300));
			panel.dispatchEvent(getMouseEvent(200, 300));

			var dots = $(".borderOfdot"); 
			var i = 0; 
	        dots.each(function(ind, elt) { 
	        	initialiseDot($(elt), 65 + (i++));
	        });

	        dots.each(function(ind, elt) { 
	        	$(elt).click();
	        	$(dots[ind+1]).click();
	        });
	       dots.first().click();
	       model.printAllLines();

 		
		}, 1000);
     var i = 0; 
    window.setInterval(  function() {
        function getI(){
            return i++; 
        };
        console.log(getI()); 
        model.printAllLines();
        model.printAllDots();
       
        
        if (model.getLineByName("AB")) {
        	 var dot1 = model.getLineByName("AB").firstDot; 
	        console.log("first in AB: " + dot1.prop("name") + " attr " +  dot1.attr("name") + " " + dot1.val("name")); 
	        var dot2 = model.getLineByName("AB").secondDot; 
	        console.log("second in AB: " + dot2.prop("name")+ " attr" + dot1.attr("name")+ " " + dot1.val("name")); 
		    var lineName = model.getLineByName("AB").name;     
		    var lineget = model.getLineByName("AB").getName(); 
		    console.log(lineName + " throu get " + lineget); 
	    };

    }, 15000);             

}


// var evt = new Event('click');
// var e = new MouseEvent("click", {
//   bubbles: true,
//   cancelable: true,
//   clientX: 200,
//   clientY: 200
// });
// $("#paintingPanel")[0].dispatchEvent(e); 

// $(".centerOfdot").click(); 
