require(['./shake'], function(Shake) {
  var myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 500 // optional, determines the frequency of event generation
  });

  myShakeEvent.start();

  window.addEventListener('shake', shakeEventDidOccur, false);

  //function to call when shake occurs
  function shakeEventDidOccur () {

      //put your own code here etc.
      var x = Math.floor(Math.random() * 10) + 1;
      switch(x) {
        case 1: window.location.href = "games/overwatch.html";
        break;
        case 2: window.location.href = "games/hearthstone.html";
        break;
        case 3: window.location.href = "games/hots.html";
        break;
        case 4: window.location.href = "games/destiny.html";
        break;
        case 5: window.location.href = "games/warframe.html";
        break;
        case 6: window.location.href = "games/trove.html";
        break;
        case 7: window.location.href = "games/brawlhalla.html";
        break;
        case 8: window.location.href = "games/terraria.html";
        break;
        case 9: window.location.href = "games/rainbow.html";
        break;
        case 10: window.location.href = "games/crew.html";
        break;
        default:
        break;
      }
  }
});
