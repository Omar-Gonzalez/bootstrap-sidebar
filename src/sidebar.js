/**
* Omar Gonzalez - 17-10-2017 - Copyright MIT
* ES6 Sidebar-Bootsrap Source 
*/

class SideBar {
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
    constructor(){
        /**
        * Define device kind
        */
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        }else{
            this.isMobile = false;
        }
        this.screenSizeEvent();
        //Props
        this.updating = false;
        this.state = "close";
        this.mobileBreakPoint = 768;
    }

    get deviceKind(){
        if(this.isMobile){
            return "Mobile Device";
        }else{
            return "Desktop";
        }
    }

    update = () => {
        if (!this.updating){
            if (this.state === "close"){ //Open the SB
                this.updating = true;
                $("#sidebar").animate({
                    width: '85%'
                }, 350, () => {
                    //animation complete
                    $('.sb-close').css('display','block');
                    $('.sidebar-content').css('display','block');
                    this.updating = false;
                    this.state = "open";
                });
            }
            if (this.state === "open"){ //Close the SB
                this.updating = true;
                $('.sb-close').css('display','none');
                $('.sidebar-content').css('display','none');
                $('#sidebar').animate({
                    width:'44px'
                }, 350, () => {
                    //animation complete
                    this.updating  = false;
                    this.state = "close";
                });            
            }        
        }else{
            console.log("sb-updating");
        }
    }

    screenSizeEvent = () => {
        $(window).on('resize',()=>{
            if($(window).width() > this.mobileBreakPoint){
                $('#sidebar').css('width','240px');
                $('.sb-close').css('display','none');
                $('.sidebar-content').css('display','block');            
            }else{
                $('#sidebar').css('width','44px');
                $('.sb-close').css('display','none');
                $('.sidebar-content').css('display','none');            
            }
        });
    }
}

let sb = new SideBar();

console.log(sb.deviceKind)
