$(function(){
  var cat = new Cat
  $('html').click(function(e){
    cat.add($(e.target),e.screenX,e.screenY);
  });
});


function Cat (){
  this.image_url = "http://www.us.onsior.com/images/hero-cat-home_01.png"
}

Cat.prototype.add = function(elem,x,y){
  console.log(y);
  var cat = ("<img id=meow src ="+this.image_url+"></img>");
  var meow = $(elem).append(cat);
  $('#meow').css('top',""+y+'px');
  $('#meow').css('left',""+x+'px');


};
