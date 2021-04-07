// Code From https://codepen.io/sirjessthebrave/pen/EwaZzj
// Credits: Jessica Bell

var ranks = [];
var deckLenght = 25;

for(i=1; i <= deckLenght; i++) {
    ranks.push(i);
}

console.log(ranks);
var deck = [];

$(init);

function init() {
  makeDeck();
  
  $("#drawbtn").click( function() { 

    var myCard = drawCard();   
    makeCard( myCard.rank ); 
  });
  
}

function makeDeck() {
  
  deck = [];

    //for each
    for( var j = 0; j < 12; j++ ) {
      
      //make a card
      var card = {};
      card.rank = ranks[j];
      
      deck.push(card);
    }

}

function drawCard() {
  
  var card;
  
  if( deck.length > 0 ) {
    
    var randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice( randIndex, 1 )[0];
  }
  
  return card;
}


 function makeCard( rank ) {
  
  $("#card_title").html(rank);
  $(".card_wrap").append("<div class='news' style='background: #4B61D1 url(/dist/img/deck/carta_mentana_"+ rank + ".jpeg) no-repeat left center fixed'></div>");
} 

