console.log("line loaded");

var Line = (
	function ($dotA, $dotB){
		var this_ = this;
	    function Line($dotA, $dotB){ 
	    	console.log("start creating line ") ;
	    	console.log($dotA);
	    	console.log($dotB);
	    	this.firstDot = $dotA;
	    	this.secondDot = $dotB;
	    	this.length = lineLength($dotA, $dotB); 
	    	this.name = setName($dotA, $dotB);
	    	this.alias = setAlias($dotA, $dotB); 
	        console.log("line created " + this.length + " " + this.name);
	    }
	    // function setName(){
	    // 	return this.firstDot.name + this.secondDot.name; 
	    // }
   	function lineLength ($A, $B){
             function subAndPow(a, b){
                 return Math.pow(a - b, 2); 
              }
           //  return Math.sqrt(subAndPow(array[0], array[2]) + subAndPow(array[1], array[3])); 
              return Math.sqrt(subAndPow($A.data("x"), $B.data("x")) + subAndPow($A.data("y"), $B.data("y"))); 
        }
        function setName($A, $B){
            return "" + $A.attr("name") + $B.attr("name"); 
        }
         
        function setAlias($A, $B){
            return "" + $B.attr("name") + $A.attr("name"); ; 
        }

        function parseToCoordArray($dotArray){
            var array = []; 
            for (var i = 0, j = 0; i < $dotArray.length; i++, j = j+2) {
                array[j] = $dotArray[i].data("x"); 
                array[j+1] = $dotArray[i].data("y"); 
            }
            return array; 
		} 

	/*  function setAlias(){
	  	 return this.name.reverse();
	  }*/
 	Line.prototype =  {
	     	constructor: Line, 
	       	test : function() { return setName();},
	     	getName : function() {return this.name;},
	     	getLength : function() {return this.length;},
	     	reName : function() {this.name = setName(this.firstDot, this.secondDot); this.alias = setAlias(this.firstDot, this.secondDot); }
              
	     }; 
	 	return Line;
} () );

/*var line = new Line("A", "B"); 
console.log(line.firstDot);
console.log(line.secondDot);
line.firstDot = "C";
console.log(line.firstDot);
console.log(line.name());
console.log(line.alias());

console.log(line.test());
console.log(line.getName());*/