// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function gotoTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



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
