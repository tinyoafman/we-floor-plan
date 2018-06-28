function showPlanElement(type, val){
  console.log("showing plan element: "+val)

  let elem = $('#'+val);

  var offset = elem.offset();

  $('html, body').animate({
    scrollTop: offset.top-100,
    scrollLeft: offset.left-20
  });
  
  elem.addClass("flash");

  setTimeout(function() {
    elem.removeClass('flash');
  }, 5000);
}
