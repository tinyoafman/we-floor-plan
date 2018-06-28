function showPlanElement(val){

  var rooms = document.getElementsByClassName("colourable")

  for(var i = 0; i < rooms.length; i++){
    rooms[i].style.backgroundColor="#dad9db"
  }

  document.getElementById(val).style.backgroundColor="green"
}

function showTeamElement(val){

  var rooms = document.getElementsByClassName("colourable")

  for(var i = 0; i < rooms.length; i++){
    rooms[i].style.backgroundColor="#dad9db"
  }

  var desks = document.getElementsByClassName(val)

  for(var i = 0; i < desks.length; i++){
    desks[i].style.backgroundColor="green"
  }
}
