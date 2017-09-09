$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();


var tween = TweenMax.to('.button', 0.1, {
   //color:'black',
   //backgroundColor:'white'
  
   
 
  });

  var scene = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 0, /* offset the trigger 150px below #scene's top */
    
    
  }).on('start', function() {
   document.getElementById('code').classList.add("active");
    document.getElementById('home').classList.remove("active");
    document.getElementsByClassName('active')[0].style.backgroundColor = 'white';
    
    var x = document.getElementsByClassName("button");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.color = "white";
}
document.getElementsByClassName('active')[0].style.color = 'black';
  })
  .on('leave', function() {
   document.getElementById('code').classList.remove("active");
    document.getElementById('home').classList.add("active");
document.getElementsByClassName("active")[0].style.color='white';
  var x = document.getElementsByClassName("button");  
    var i;
for (i = 0; i < x.length; i++) {
    x[i].style.color = "black";
    x[i].style.backgroundColor='';
}
  })
  .setTween(tween)
  .addTo(scrollMagicController);
scene.addIndicators();
  $("#lol").typed({
		strings: ["Hello...", "My name is Veeral Bhagat..", "I am a second year computer science major.."],
  typeSpeed:50,
  loop:true,
  showCursor:false
})


var tween1 = TweenMax.to('.projects', 0.4, {
  width:200,
  height:200,
  backgroundColor:'#ddd'
   
 
  });
  
  var scene1 = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 100, 
    
    
  })
  .setTween(tween1)
  .addTo(scrollMagicController);
 
	$("#code").click(function() {
    $('body').animate({
        scrollTop: $("#code_cont").offset().top},
        'slow');
        

});
	var x = document.getElementsByClassName('button');
	var i;
for (i = 0; i < x.length; i++) {
    x[i].style.color = "black";
}
//$('.button').style.color='black';

  
  
});



