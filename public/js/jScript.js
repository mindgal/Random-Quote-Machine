function setJson() {
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function (a) {
    $(".quote").html("<p>" + a.quote + "</p>" + "<p class=\"text-right\">" + a.author + "</p>");
    var link = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(a.quote); 
    $("#twitter-link").attr("href", link);
  });
}


$(document).ready(function () {

  setJson();

  $(".callQuoteButton").on("click", setJson);
});