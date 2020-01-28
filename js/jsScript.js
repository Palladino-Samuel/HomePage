import * as news from './scrollEvent.js';

//scroll event
news.start();
news.setNav();

//collapse
$(document).ready(function(){
  $("#collapse_1").on("show.bs.collapse", function(){
    $(".try_1").removeClass("bg-light").addClass("bg-dark");
  });
  $("#collapse_1").on("hide.bs.collapse", function(){
    $(".try_1").removeClass("bg-dark").addClass("bg-light");
  });
});
