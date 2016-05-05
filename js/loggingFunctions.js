function logDownloadedFile (ge){
           console.log("downloadedFile: ");
           console.log(ge.height);
           console.log(ge.width);  

};
function logElementParameters(elt){
      console.log("Element parameters");
       console.log(elt.offsetLeft); 
      console.log(elt.offsetWidth);
      console.log(elt.offsetHeight); 
};

function logPicturedParameters(){
   console.log($("#pictured").height() + " " + $("#pictured").width() +  " pictured before");         
   console.log($("#pictured").height() + " " + $("#pictured").width() +  " pictured after"); 	
}
function logDotParameters(elt) {
  console.log("center of dot " + elt.data("x") + " " + elt.data("y")); 
}

function logPaintingParameters(){
    console.log($("#paintingPanel").width() + "paintingPanel before"); 
    console.log($("#paintingPanel").css("backgroundColor") + "paintingPanel before"); 
   console.log($("#paintingPanel").css("z-index") + " z-index paintingPanel before"); 
   console.log($("#paintingPanel").css("position") + " position paintingPanel before"); 
      console.log($("#paintingPanel").css("top") + " position paintingPanel before"); 
}
function logCurrentEvent(evt){
	console.log(evt);
}
function logOverlappingElements(eltA, bx, by, bx1, by1){
 	console.log(a.x1<bx);
 	console.log(a.y < by1 && a.y1 > by &&  a.x1 < bx &&  a.x > bx1);
	console.log("in isRectIntersect " + bx + " " + by+ " " + bx1+ " " + by1);   
 	console.log(a.y + ">" + by1 + " a.y > by1 " +   (a.y > by1));
	console.log(a.y1 + "<" + by + " a.y1 < by " +   (a.y1 < by));
 	console.log(a.x1  + "<" + bx + " a.x1 < bx " +   (a.x1 < bx));
 	console.log(a.x + ">" + bx1 + " a.x > bx1 " +   ( a.x > bx1));
	for(prop in a){
    console.log(prop + ":" + a[prop] );
   }; 
    console.log(a.x1 + " " + bx);
}
function logClick(evt){
	console.log("click done! ");
    console.log("at: page " + evt.pageX + " " + evt.pageY);
    console.log("at: client " + evt.clientX+ " " + evt.clientY);   
}
function logData(elt){
  for(data in elt.data()){
    console.log(data + elt.data("" + data));
  }
}
