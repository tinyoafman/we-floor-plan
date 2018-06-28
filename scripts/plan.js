function showPlanElement(type, val){
  console.log("showing plan element: "+val)
  $('#'+val).addClass("flash");
  setTimeout(function() {
    $('#'+val).removeClass('flash');
  }, 5000);
}
