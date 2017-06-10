console.log('app.js');

// initalize new simon game
var myGame = new SimonGame();

console.log(myGame);

$(document).ready(function() {
  myGame.startGame();
});

$(document).ready(function() {
  $('button').click(function () {
    var recentClick = $(this).prop('id');
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];

    if (currentSequenceColor === recentClick) {
      myGame.userClickCount++;

      if (myGame.userClickCount >= myGame.sequence.length) {
        $('body').addClass('sequence-entered');

        setTimeout(function () {
          $('body').removeClass('sequence-entered');
          myGame.nextRound();
        }, 700);
      }
    }
    else {
      myGame.gameOver();
      $('.game-over button').click(function() {
        $('.game-over').fadeOut(300);
      });
      myGame.startGame();
    }
  });
});
