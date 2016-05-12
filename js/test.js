

filldotNames(); 

function filldotNames(){ 

	panel =	$("#paintingPanel")[0]; 
	form =  $(".inputChar"); 	 

	

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
		console.log("start pressing");
	
		form[0].dispatchEvent(getKeyBoarEvent(code)); 
		form.val( String.fromCharCode(code));
		$('.buttom-container').click(); 
	}

 
    function showSlow(fun){
    	var towait = window.setTimeout(fun, 10500); 
    }

    window.setTimeout( 
			function(){
			console.log("in setTimeout ");
			panel.dispatchEvent(getMouseEvent(200, 200)); 
			panel.dispatchEvent(getMouseEvent(300, 300));
			panel.dispatchEvent(getMouseEvent(200, 300));

			var dots = $(".borderOfdot"); 
			var i = 0; 
	        dots.each(function(ind, elt) { 
	        	console.log(i + "" + elt);
	        	$(elt).click();
	        	initialiseDot($(elt), 65 + (i++));
	        })
	        dots.first().click();

 			/*dots.first().click(); 
 			dots.last().click(); 

 			dots.first().click();
 			dots[1].click(); 
 			for (var i = dots.length - 1; i >= 0; i--) {
 			 	initialiseDot(dots[i], 65+i);
 			 }; */

 		/*	initialiseDot(dots.first(), 66);
 			initialiseDot(dots.last(), 65);*/

		}, 1000); 

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
