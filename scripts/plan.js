function showPlanElement(val){
  // total hack but...
  var rooms = document.getElementsByClassName("clearable")
  console.log(rooms.length)
  for (var i=0;i<rooms.length;i++) {
    rooms[i].style.backgroundColor="#dad9db"
  }
  document.getElementById(val).style.backgroundColor="green"
  console.log("showing plan element: "+val)
}
