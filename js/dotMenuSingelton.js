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
       setTimeout(1500); 
       $instance.$menu.css("display", "none"); 
    }),

    $form : $('#dotNameForm'), 
    $currentDot: null,  
    $inputForm : $('.inputChar').keypress(keypressHandle),
    $submitButtom : $('.buttom-container').click($clickHandle), 
  };

  function $clickHandle(evt){
        console.log("in buttom submit click Singelton");
        $instance.$menu.css("display", "none"); 
  //console.log(" dot in menu " + dotMenu.data("dot"));
        console.log("dot1 " +   $instance.$currentDot[0]);
        var text = $instance.$inputForm.val(); 
        var $dot = $instance.$currentDot; 

        if (!dotVaul.contains(text)) {
          var sameDot = dotVaul.getNameByDot($dot); 
          if (sameDot) { 
            dotVaul.removeDot(sameDot); 
            DotManager.changeTextToDot($dot, text); 
          } else   DotManager.setNameToDot($dot, text);
          dotVaul.setDot(text, $dot);
        } else  alert("exitst yet!");  

        evt.stopPropagation();
        $instance.$inputForm.val("");  
        dotVaul.print();
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
    if (dotVaul.contains(text)) {
      alert("keypress exitst yet!");
    } 
   console.log("keypress " + text + " " + code);   
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