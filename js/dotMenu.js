function DotMenu(){
  var $instance;
  
 

    this.$menu = $('.dotMenuBox'),
    this.$form = $('#dotNameForm'), 
    this.$currentDot = null,  
    this.dotNameArray =  new Array(), 
    this.$getCurrentDot = function(){
       return this.$currentDot;  
    },
    this.$setCurrentDot = function(elt){
       this.$currentDot = elt;  
    },
    this.$inputForm  = $('.inputChar').keypress( keypressHandle),
    this.$submitButtom = $('.buttom-container').click($clickHandle), 

  function $clickHandle(evt){
        console.log("in buttom submit click Singelton");
         $instance.$menu.css("display", "none"); 
  //console.log(" dot in menu " + dotMenu.data("dot"));
         console.log("dot1 " +   $instance.$currentDot);
         setNameToDot($instance.$getCurrentDot, $instance.$inputForm.val()); 
   //  console.log(dotMenu1.$getCurrentDot);
    
        $instance.$menu.dotNameArray[$instance.$inputForm.val()] = $menu.data("dot"); 
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
 
  return $instance; 
}