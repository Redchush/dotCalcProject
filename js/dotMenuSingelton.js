
function DotMenu(){
  var $instance;
  DotMenu = function(){
    return $instance; 
  };
  DotMenu.prototype = this;
  $instance = new DotMenu();
  $instance.constructor = DotMenu;

  $instance = {
    $menu : $('.dotMenuBox').mouseleave( function(evt){
       $instance.$menu.css("display", "none"); 
    }),
    $form : $('#dotNameForm'), 
    $currentDot: null,  
    dotNameArray: new Object(), 
    $inputForm : $('.inputChar').keypress(keypressHandle),
    $submitButtom : $('.buttom-container').click($clickHandle), 
  };

  function $clickHandle(evt){
        console.log("in buttom submit click Singelton");
        $instance.$menu.css("display", "none"); 
  //console.log(" dot in menu " + dotMenu.data("dot"));
        console.log("dot1 " +   $instance.$currentDot[0]);
      
        var text = $instance.$inputForm.val(); 
        var array = $instance.dotNameArray; 
        var $dot = $instance.$currentDot; 

        if (!array[text]) {
          var sameDot = getNameByDot($dot); 
          if (sameDot) { 
            delete array[sameDot]; 
            changeTextToDot($dot, text); 
          } else   setNameToDot($dot, text);
          array[text] = $dot ;
        } else  alert("exitst yet!");  

        evt.stopPropagation();
        $instance.$inputForm.val("");  
        console.log($instance.dotNameArray); // get dot by name
  }

  function keypressHandle(e){
   var code = e.charCode || e.keyCode;
    if (code == 8) return; 
    if (code < 65 || code > 122 || (( code < 97) && (code > 90)) ||
      e.charCode === 0 || e.ctrlKey || e.altKey) {
       alert("wrong!");  
       return false; 
    }
    var text = String.fromCharCode(code);
    if ($instance.dotNameArray[text]) {
      alert("keypress exitst yet!");
    } 
    console.log("keypress " + text + " " + code);   
  }

  function getNameByDot($dot){  
    for(prop in $instance.dotNameArray) {
        console.log($instance.dotNameArray[prop] === $dot);
        if ($instance.dotNameArray[prop] === $dot){
          return prop; 
        }
    }
  }

  return $instance; 
}




/*
 function clickHandle(evt){
  console.log(this);
  console.log(DotMenu.$currentDot);
  console.log(dotMenu1.$getCurrentDot);
  console.log(dotMenu1.$currentDot3);
  console.log(dotMenu1.$currentDot4);
  
    console.log("in buttom submit click Singelton");
    $instance.$menu.css("display", "none"); 
  //console.log(" dot in menu " + dotMenu.data("dot"));
    console.log("dot1 " +  $currentDot);
    setNameToDot($instance.$getCurrentDot, $instance.$inputForm.val()); 
   //  console.log(dotMenu1.$getCurrentDot);
    
    $instance.$menu.dotNameArray[dotMenu1.$inputForm.val()] = $instance.$menu.data("dot"); 
    evt.stopPropagation(); 
  }

  function keypressHandle(e){
   var code = e.charCode || e.keyCode;
    if (code < 32 || code > 122 || (( code < 97) && (code > 90)) ||
      e.charCode == 0 || e.ctrlKey || e.altKey) {
       console.log("wrong!");  return; 
    }
    var text = String.fromCharCode(code); 
    console.log("keypress" + text);   
  }



function createDotMenu(){

  dotMenu = $('.dotMenuBox'); 
  var dotNameForm = $('#dotNameForm'); 
  var dotNameFormSubmit = $('.buttom-container'); 
  var inputForm = $('.inputChar'); 
 
  var isClicked; 

  dotNameFormSubmit.submit(function(evt){
    dotMenu.css("display", "none")
    console.log("in buttom submit submit")
    console.log("value " + inputForm.val());
  });

   dotNameFormSubmit.click(function(evt){
    console.log("in buttom submit click")
    dotMenu.css("display", "none") 
  
  //console.log(" dot in menu " + dotMenu.data("dot"));
    currentValue.push(inputForm.val());
    console.log("hint " + currentDot().get());
    setNameToDot(dotMenu.data("dot"), inputForm.val()); 
    evt.stopPropagation(); 

  });

  dotNameForm.submit(function(evt){
    console.log("in submit")
    dotMenu.css("display", "none")
  });

  dotNameForm.click(function(evt){
    console.log("in click form");
    evt.stopImmediatePropagation(); 
  });

  inputForm.keypress(function(e){
    var code = e.charCode || e.keyCode;
    if (code < 32 || code > 122 || (( code < 97) && (code > 90)) ||
      e.charCode == 0 || e.ctrlKey || e.altKey) {
       console.log("wrong!");  return; 
    }
     var text = String.fromCharCode(code); 
     console.log("keypress" + text);

    });  
  } 
  */