$(function() {
	
	
	cycle= function(n){

var img_list = ['https://image.prntscr.com/image/XxcMgMByT9Geuz7_3ZYu8w.jpg',
								'https://image.prntscr.com/image/hDHXCdK6TG2bE-odMxXtiQ.jpg',
								'https://image.prntscr.com/image/7GGjVcJqRzmZcRLX9Y65_g.jpg',
                'https://image.prntscr.com/image/6pwOpei9RCOGtLQzVPu74w.jpg',
                'https://image.prntscr.com/image/texyqCKHTO60VGXdKc11nQ.jpg',
                'https://image.prntscr.com/image/B4h50BHfQCiCNfXlaP4SBA.jpg'
                ]
if (n<0){
 slideIndex = img_list.length-1;
}
else if (n>=img_list.length){
slideIndex = 0;
}
$('#photo_container').fadeOut(100, function(){
document.getElementById('photo_container').src = img_list[slideIndex];

}).fadeIn(100);


}
    
    var slideIndex = 0;
cycle(slideIndex);

next = function(n){
cycle(slideIndex += n);
}

$('#next').click(function(){
next(1);
}
);
$('#prev').click(function(){
prev(-1);
}
);

prev = function(n){
cycle(slideIndex += n);
}


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
//scene.addIndicators();
  document.getElementsByClassName('button')[0].style.backgroundColor='black';
     document.getElementsByClassName('button')[0].style.color='white';
  
  $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 700) {
        var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='white';
	x[i].style.backgroundColor='black';
        }
   document.getElementsByClassName('button')[1].style.backgroundColor='white';
     document.getElementsByClassName('button')[1].style.color='black';
  }
    
    else{
     var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='black';
	x[i].style.backgroundColor='white';
        }
    }
    document.getElementsByClassName('button')[0].style.backgroundColor='black';
     document.getElementsByClassName('button')[0].style.color='white';
    
    
    
});
  
  $("#lol").typed({
		strings: ["Hello","My name is Veeral Bhagat", "I am a second year computer science major"],
  typeSpeed:30,
  loop:true,
  showCursor:false
})



/*var tween1 = TweenMax.to('#proj_wrapper', 0.4, {
  //width:200,
 // height:200,
  width:790,
  
  
   
 
  });
  
  var scene1 = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 50, 
    
    
  })
  .setTween(tween1)
  .addTo(scrollMagicController);
 */
 
	$("#code").click(function() {
    $('body').animate({
        scrollTop: $("#code_cont").offset().top},
        'slow');


});

$("#photo").click(function() {
    $('body').animate({
        scrollTop: $("#photo_cont").offset().top},
        'slow');


});
	
	
	$("#home").click(function() {
    $('body').animate({
        scrollTop: $("#home_cont").offset().top},
        'slow');
	});
//$('.button').style.color='black';

  /*var tween2 = TweenMax.to('#photo_cont', 0.4, {
  //backgroundColor:'#fff',
  width:'100%'
  
  
   
 
  });
  
  var scene2 = new ScrollScene({
    triggerElement: '#photo_cont',
    offset:-100 , 
    duration:200
    
    
  })
  .setTween(tween2)
  .addTo(scrollMagicController);
 */ 
 $(window).scroll(function() {
    var height = $(window).scrollTop();
		if(height>1300){
    $("#photo_cont").clearQueue().animate({ width: '100%' }, 'fast');
    
    }
    else{
    $("#photo_cont").clearQueue().animate({ width: '0%' }, 'fast');
    }
    
    
    });
    
    $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 1500) {
        var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='black';
	x[i].style.backgroundColor='lightgray';
        }
   document.getElementsByClassName('button')[2].style.backgroundColor='black';
     document.getElementsByClassName('button')[2].style.color='lightgray';
     
     document.getElementsByClassName('button')[0].style.backgroundColor='lightgray';
     document.getElementsByClassName('button')[0].style.color='black';
  }
    
    else if (height < 1500 && height < 800){
     var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='black';
	x[i].style.backgroundColor='white';
        }
        document.getElementsByClassName('button')[0].style.backgroundColor='black';
     document.getElementsByClassName('button')[0].style.color='white';
    }
    else if (height < 1500 && height > 800){
     var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='white';
	x[i].style.backgroundColor='black';
        }
        document.getElementsByClassName('button')[1].style.backgroundColor='white';
     document.getElementsByClassName('button')[1].style.color='black';
     
    }
    
    
    
    
});
    
    $(window).scroll(function() {
    var height = $(window).scrollTop();
     if (height>700 && height < 1400){
     $("#proj_wrapper").clearQueue().animate({opacity: '1'}).fadeIn('fast');
          }
     else{
     $("#proj_wrapper").css('opacity','0');
     }
    
    
    });
    
    var slideIndex = 0;
cycle(slideIndex);

function next(n){
cycle(slideIndex += n);
}

function prev(n){
cycle(slideIndex += n);
}

function cycle(n){

var img_list = ['https://image.prntscr.com/image/XxcMgMByT9Geuz7_3ZYu8w.jpg',
								'https://image.prntscr.com/image/hDHXCdK6TG2bE-odMxXtiQ.jpg',
								'https://image.prntscr.com/image/7GGjVcJqRzmZcRLX9Y65_g.jpg',
                'https://image.prntscr.com/image/6pwOpei9RCOGtLQzVPu74w.jpg',
                'https://image.prntscr.com/image/texyqCKHTO60VGXdKc11nQ.jpg',
                'https://image.prntscr.com/image/B4h50BHfQCiCNfXlaP4SBA.jpg'
                ]
if (n<0){
 slideIndex = img_list.length-1;
}
else if (n>=img_list.length){
slideIndex = 0;
}
$('#photo_container').fadeOut(100, function(){
document.getElementById('photo_container').src = img_list[slideIndex];

}).fadeIn(100);


}
    
});
