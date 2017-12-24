"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Omar Gonzalez - 17-10-2017 - Copyright MIT
 * ES6 Sidebar-Bootsrap Source 
 */

var UI = window.UI || {};

UI.Sidebar = function () {
    /**
     * SideBar Component - props:
     * - this.updating : weather the sidebar is updating state
     * - this.state : weather the sidebar is open or close
     * - this.mobileBreakPoint : grid break point for mobile devices
     * SideBar - methods:
     * - update() - close or open the side bar
     * - screenSizeEvent() - attach event listener screen width change
     * - setDesktopMode() - set destkop mode if necesary
     */
    function _class() {
        _classCallCheck(this, _class);

        //Props
        this.updating = false;
        this.state = "close";
        this.mobileBreakPoint = 768;
        //Init methods
        this.screenSizeEvent();
    }

    _createClass(_class, [{
        key: "update",
        value: function update() {
            var _this = this;

            if (!this.updating) {
                if (this.state === "close") {
                    //Open the SB
                    this.updating = true;
                    $("#sidebar").animate({
                        width: '85%'
                    }, 350, function () {
                        //animation complete
                        $('.sb-close').fadeIn("fast");
                        $('.sidebar-content').fadeIn("fast");
                        _this.updating = false;
                        _this.state = "open";
                    });
                }
                if (this.state === "open") {
                    //Close the SB
                    this.updating = true;
                    $('.sb-close').css('display', 'none');
                    $('.sidebar-content').fadeOut("fast");
                    $('#sidebar').animate({
                        width: '44px'
                    }, 350, function () {
                        //animation complete
                        _this.updating = false;
                        _this.state = "close";
                    });
                }
            } else {
                console.log("sb-updating");
            }
        }
    }, {
        key: "screenSizeEvent",
        value: function screenSizeEvent() {
            var _this2 = this;

            this.resize();
            $(window).on('resize', function () {
                _this2.resize();
            });
        }
    }, {
        key: "resize",
        value: function resize() {
            if ($(window).width() >= this.mobileBreakPoint) {
                $('.sidebar-nav').hide();
                $('#sidebar').css('width', '240px');
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').css('display', 'block');
            } else {
                $('.sidebar-nav').show();
                $('#sidebar').css('width', '44px');
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').css('display', 'none');
            }
        }
    }]);

    return _class;
}();

UI.sb = new UI.Sidebar();

$(document).ready(function () {
    $('.sb-toggle, .sb-close').click(function () {
        UI.sb.update();
    });
});
//# sourceMappingURL=sidebar.build.js.map