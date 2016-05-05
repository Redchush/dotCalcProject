var dotMenu;
var freeHeight;
var freeWidth; 
         // menu for enter the name
//utulity functions
addEventListener("load", hadleLoad, false ); 
document.getElementById('files').addEventListener('change', handleFileSelect, false);

function hadleLoad(){
  prepareData(); 
}

//onload function
function prepareData(){
  console.log("While loading screen " + innerWidth + " " + innerHeight);
  var busy = $("#pictured").offset().top; 
  var space = innerHeight - busy - 40; 
  freeHeight = space; 
  console.log("Offset from picture" + busy);
   //for dot menu data limitation 
 dotMenu = new DotMenu(); 
}
function handleFileSelect(evt) {
  var downloadedFile = evt.target.files[0]; // FileList object
      // Only process image files.
   if (!downloadedFile.type.match('image.*')) {
    alert("It isn't image");
    return; 
}

  var reader = new FileReader();        // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
     var elt = document.getElementsByClassName('thumb')[0]; 
     var image = new Image();
     image.src = e.target.result; 
     var previousHeight = image.height; 
     var previousWidth = image.width;
  // console.log("image at load " + previousWidth + " " + previousHeight);
     image.height = freeHeight; 
     image.width = Math.round(previousWidth*freeHeight/previousHeight); 
 // console.log("Free " + freeHeight);           console.log("Image: " + image.height + " " + image.width);
      $("#fileLoader").attr("display", "none"); 
      $adjustPanel(image, $("#pictured"));   
      if (elt) {
        console.log("true"); 
        elt.setAttribute("src", e.target.result); 
        elt.title = escape(theFile.name);  
        $adjustPanel(image, $(".panels")); 
      } 
      else { 
        var output = document.getElementById('pictured'); 
        $('<img>').attr({
          "height" : freeHeight + "px", 
          "class"  : "thumb",
          "src"    : e.target.result
        }).prependTo(output);         // logElementParameters(output); 
        createPaintinPanel(image);   
  }     
  hideText();   
     
    };})(downloadedFile);
  reader.readAsDataURL(downloadedFile);
}

// create painting panel
var createPaintinPanel = function(adjImg){
  var paintingPanel=document.getElementById("paintingPanel");
  $adjustPanel(adjImg, $(".panels")); 
                
  dotMenu.$menu.prependTo("#paintingPanel"); 
  //painting panel event hadler
  $("#paintingPanel").click(function(evt) {
    createDot(evt, this); 
  }); 
}; 
var hideText =  function(){
   $("#innertext").css("display","none" ); 
};

function $adjustPanel(image, $elt){
  $elt.css({
            "height": image.height + "px",
            "width": image.width + "px" 
    }); 
  console.log( $elt.attr("id") + $elt.height() + " " + $elt.width()  ); 
  return $elt; 
}

function showElement(elt, left, right) {
  if (arguments.length === 3) {
  elt.css({
      "display" : "block",
      "left": left + "px",
      "top" : right + "px"               
  });
 }
  else  elt.css("display", "block");
}

function hideElt(elt){
  elt.css("display", "none");
}   





    

   
