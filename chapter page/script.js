document.addEventListener("DOMContentLoaded", function() {

  var spotlight = document.querySelector(".spotlight");

 

  function move(e) {
      var x = e.clientX || e.touches && e.touches[0].clientX;
      var y = e.clientY || e.touches && e.touches[0].clientY;

      if (x && y) {
          spotlight.style.setProperty("--x", x + "px");
          spotlight.style.setProperty("--y", y + "px");
      }
  }
  document.addEventListener("pointermove", move);
  document.addEventListener("touchmove", move);
  document.addEventListener("mousemove", move);
});
