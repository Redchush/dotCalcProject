
/* global  Controller */

function DotMenu() {
    var $instance;
    DotMenu = function () {
        return $instance;
    };
    DotMenu.prototype = this;
    $instance = new DotMenu();
    $instance.constructor = DotMenu;

    $instance = {
        $menu: $('.dotMenuBox').mouseleave(function (evt) {
            setTimeout(1500);
            $instance.$menu.css("display", "none");
        }),
        $form: $('#dotNameForm'),
        $currentDot: null,
        $inputForm: $('.inputChar').keypress(keypressHandle),
        $submitButtom: $('.buttom-container').click($clickHandle)
    };

    function $clickHandle(evt) {
        // console.log("in buttom submit click Singelton");
        $instance.$menu.css("display", "none");
        //console.log(" dot in menu " + dotMenu.data("dot"));
        //   console.log("dot1 " +   $instance.$currentDot[0]);
        var text = $instance.$inputForm.val();
        var $dot = $instance.$currentDot;
        Controller.setNameToDot($dot, text);     
        evt.stopPropagation();
        $instance.$inputForm.val("");
    }

    function keypressHandle(e) {
        var code = e.charCode || e.keyCode;
        if (code == 8)
            return;
        if (code < 65 || code > 122 || ((code < 97) && (code > 90)) ||
                e.charCode === 0 || e.ctrlKey || e.altKey) {
            alert("wrong!");
            return false;
        }
        var text = String.fromCharCode(code);
        if (model.containsDot(text)) {
            alert("keypress exitst yet!");
        }

    }
    return $instance;
}




