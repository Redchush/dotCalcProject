

var dotVaul = (function() {
    var dotInstance; 
    var dots = new Object();  
    return { // методы доступные извне
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
           var q = this.getItemCount(),p=0;
            while(q--){
                p+= basket[q].price; 
            }
            return p;
        },
        getNameByDot : function($dot){  
            for(prop in dots) {
                console.log(dots[prop] === $dot);
                if (dots[prop] === $dot){
                    return prop; 
                }
            }
        },
        contains : function(name) {
            return dots[name]; 
        },
        removeDot : function(name){
            delete dots[name]; 
        }, 
        setDot : function(name, $dot){
          dots[name] = $dot ;
      
        },
        print : function(){
          console.log("current vault state" + dots);
        }

    };

}());

