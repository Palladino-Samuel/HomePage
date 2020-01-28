let _didScroll;//   scroll pagina
let _lastScrollTop = 0;//   salva l'ultimo scroll

const _scrollNav= (function(){   //nav bar scroll
  let _delta = 5;
  let _navbarHeight = $('nav').outerHeight();

  function _scrollDown(){
    $("nav").addClass("invisible");
  }
  function _scrollUp(y){
    y+$(window).height()<$(document).height()?$("nav").removeClass("invisible"):null;

  }
  function checkScroll(th, _lastScrollTop){
    let y =th.scrollTop();
    if (Math.abs(_lastScrollTop-y)<=_delta)      return;
    (y>_lastScrollTop && y>_navbarHeight)?_scrollDown():_scrollUp(y);
    return _lastScrollTop=y;
  }
  return{
    checkScroll:checkScroll
  }
})();

var _tryModel =(function(){

function _find(){

}

  return{

  }
})();

const _progresSbar= (function(){   //progress bar
  let _y, _ris;
  let _h=$(window).height();

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


//    export function
function start(){
  $(window).scroll(function(event){
    _progresSbar.setBar($(this));
    _didScroll=true;
  });
}

function setNav(){
  setInterval(function() {
      if (_didScroll) {
          _lastScrollTop=_scrollNav.checkScroll($(this), _lastScrollTop);
          _didScroll = false;
      }
  }, 50);
}
export{setNav, start};
