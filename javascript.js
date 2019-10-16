function myFunction() {
    var x = document.getElementById("mytopmenu");
    if (x.className === "topmenu") {
      x.className += " responsive";
    } else {
      x.className = "topmenu";
    }
  }