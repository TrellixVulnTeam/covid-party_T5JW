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
    
    if( myCard ) {
      makeCard( myCard.rank );
    } else {
      alert("no more cards in the deck");
    }
    
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
  
  
  console.log( "MADE A NEW DECK OF ", deck.length, " CARDS" );
  console.log( deck );
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
  var card = $(".card.template").clone();
  
  card.removeClass("template");
  
  card.find(".rank").append("<img src='/dist/img/deck/carta_mentana_"+ rank + ".jpeg' class='img-responsive' />");
  $("#card_title").html(rank);
  // Alert numero carta
  // alert(rank);

  $("body").append(card);
}