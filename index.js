$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();


var tween = TweenMax.to('.button', 0.1, {
   //color:'white',
   //backgroundColor:'white'
  });

  var scene = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 0, /* offset the trigger 150px below #scene's top */
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
	
//$('.button').style.color='black';

  
  
});

