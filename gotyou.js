function runAway() {
    var noButton = document.getElementById("no-button");
    var x = 0;
    var y = 0;
    var xSpeed = 5;
    var ySpeed = 3;
    setInterval(function() {
      x += xSpeed;
      y += ySpeed;
      noButton.style.left = x + "px";
      noButton.style.top = y + "px";
      if (x + noButton.clientWidth > window.innerWidth || x < 0) {
        xSpeed = -xSpeed;
      }
      if (y + noButton.clientHeight > window.innerHeight || y < 0) {
        ySpeed = -ySpeed;
      }
    }, 10);
  }
  setTimeout(function(){
    alert("YOUR ONLY CHOICE IS TO SAY YES!!! HAHAHHA");
    var audio = new Audio("music/song.mp3");
    audio.loop = true;
    audio.play();
  }, 8000);
