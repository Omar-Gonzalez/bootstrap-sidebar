"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Omar Gonzalez - 17-10-2017 - Copyright MIT
* ES6 Sidebar-Bootsrap Source 
*/

var SideBar =
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
function SideBar() {
    var _this = this;

    _classCallCheck(this, SideBar);

    this.update = function () {
        if (!_this.updating) {
            if (_this.state === "close") {
                //Open the SB
                _this.updating = true;
                $("#sidebar").animate({
                    width: '85%'
                }, 350, function () {
                    //animation complete
                    $('.sb-close').css('display', 'block');
                    $('.sidebar-content').css('display', 'block');
                    _this.updating = false;
                    _this.state = "open";
                });
            }
            if (_this.state === "open") {
                //Close the SB
                _this.updating = true;
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').css('display', 'none');
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
    };

    this.screenSizeEvent = function () {
        $(window).on('resize', function () {
            if ($(window).width() > _this.mobileBreakPoint) {
                $('#sidebar').css('width', '240px');
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').css('display', 'block');
            } else {
                $('#sidebar').css('width', '44px');
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').css('display', 'none');
            }
        });
    };

    //Props
    this.updating = false;
    this.state = "close";
    this.mobileBreakPoint = 768;
    //Init methods
    this.screenSizeEvent();
};

var sb = new SideBar();
//# sourceMappingURL=sidebar.build.js.map