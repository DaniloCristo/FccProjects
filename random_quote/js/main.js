$(document).ready(function(){
  
  
    //click button event
  $("#btn_quote").click(function(){
   
 //get the json with jquery
    $.getJSON("https://api.myjson.com/bins/m71vf",function(data){
      //var for the random quote
      let i = Math.floor(Math.random()*data.Quotes.length);
      //var for the quote
      let quote = data.Quotes[i].quoteText;
      //var for the author
      let autor = data.Quotes[i].quoteAuthor;
      //sending the quote and the respective author
      $("#quote").html(quote);
      $("#autor").html("-"+autor);
      
      $('#btn_tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '"'+ quote +' " ' + autor);
    });
  });
  
  

});
