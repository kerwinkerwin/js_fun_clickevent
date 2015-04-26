$(function(){
  var cat = new Cat
  $('div').click(function(e){

    console.log(e.pageX);
    console.log(e.pageY);
    var mouseX = event.clientX + document.body.scrollLeft;
    var mouseY = event.clientY + document.body.scrollTop;
    console.log(mouseX);
    console.log(mouseY);
    cat.add($(e.target),mouseX,mouseY);
  });
});


function Cat (){
  this.image_url = "http://www.us.onsior.com/images/hero-cat-home_01.png"
  this.cat_count = 0;
}

Cat.prototype.add = function(elem,x,y){
  console.log(y);
  console.log(x);
  var cat = ("<img id="+this.cat_count+" src ="+this.image_url+"></img>");
  var meow = $(elem).append(cat);
  $('#'+this.cat_count+"").css('top',""+y+'px');
  $('#'+this.cat_count+"").css('left',""+x+'px');
  this.cat_count ++;


};
