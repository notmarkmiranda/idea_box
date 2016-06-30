function searchIdeas() {
  $("#search").keyup(function(){
    var ideas = $(".idea");

    var searchTerm = $.trim(this.value);
    if (searchTerm === ""){
      ideas.show();
    } else {
      ideas.hide();
      ideas.has("div.title-input:Contains(" + searchTerm + ")").show();
      ideas.has("div.body-input:Contains(" + searchTerm + ")").show();
    }
  });
}
