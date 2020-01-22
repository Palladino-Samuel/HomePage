var didScroll;
var lastScrollTop = 0;

$(window).scroll(function(event){
  progresSbar.setBar($(this));
  didScroll=true;
});

setInterval(function() {
    if (didScroll) {
        lastScrollTop=scrollNav.checkScroll($(this), lastScrollTop);
        didScroll = false;
    }
}, 150);




const scrollNav= (function(){   //nav bar scroll
  let _delta = 5;
  let _navbarHeight = $('nav').outerHeight();

  function _scrollDown(){
    $("nav").addClass("invisible");
  }
  function _scrollUp(y){
    y+$(window).height()<$(document).height()?$("nav").removeClass("invisible"):null;

  }
  function checkScroll(th, lastScrollTop){
    let y =th.scrollTop();
    if (Math.abs(lastScrollTop-y)<=_delta)      return;
    (y>lastScrollTop && y>_navbarHeight)?_scrollDown():_scrollUp(y);
    return lastScrollTop=y;
  }
return{
  checkScroll:checkScroll
}
})();


  const progresSbar= (function(){   //progress bar
    var _y;
    var _ris;
    var _h=$(window).height();

    function _setY(now){
      _y=now.scrollTop();
    }
    function _calc(now){
      _ris=(_y/_h)*100;
    }
    function setBar(now){
      _setY(now);
      _calc(now);
      document.getElementById("navBar").style.width=_ris+"%";
    }
    return{
      setBar:setBar
    }
  })();
