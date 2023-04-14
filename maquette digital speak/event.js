$(document).ready(function(){
        $(".boutton").animate({
            top:'170%',
        },'slow'),
        $(".boutton").animate({
         width   :'450px'
        },'slow') 
});
  $(document).ready(function(){
    $('.images1').mouseenter(function(){
            $('.images1').hide(1000);
            $('.images1').show(1000);
    })
    $('.images2').mouseenter(function(){
        $('.images2').hide(1000);
        $('.images2').show(1000);
})
$('.images3').mouseenter(function(){
    $('.images3').hide(1000);
    $('.images3').show(1000);
})
  });
$(document).ready(function(){
    $('.ok1').mouseenter(function(){
            $('.images1').css({"height":"300px","width":"310"})
            $('.ok1').mouseleave(function(){
                $('.images1').css({"height":"240px","width":"210"})
        })
    })
    $('.ok2').mouseenter(function(){
        $('.images2').css({"height":"300px","width":"310px"})
        $('.ok2').mouseleave(function(){
            $('.images2').css({"height":"240px","width":"210px"})
    })
    $('.ok3').mouseenter(function(){
        $('.images3').css({"height":"300px","width":"310px"})
        $('.ok3').mouseleave(function(){
            $('.images3').css({"height":"240px","width":"210px"})
        
    })})})});
    
$(document).ready(function(){
    $('.show').mouseenter(function(){
            $('.shadow').css({"text-shadow":"#fd3232 3px 3px 5px","opacity":"1"},7000);
    })
    $('.show').mouseleave(function(){
       
        $('.shadow').css({"text-shadow":"#fd3232 0px 0px 0px","opacity":"0.6"});
})});
   

$(document).ready(function(){
    $('.boutton').mouseenter(function(){
       
            $('.boutton').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"550px"},);
    })
    $('.boutton').mouseleave(function(){
       
        $('.boutton').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
})
$('.boutton').click(function(){
       
        $('.boutton').text('attendez quelques secondes ...');
})
$('.bout').mouseenter(function(){
       
    $('.bout').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"550px"},);
})
$('.bout').mouseleave(function(){

$('.bout').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
})
$('.bout').click(function(){

$('.bout').text('attendez quelques secondes ...');
});
$('#bouton2').mouseenter(function(){

$('#bouton2').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"550px"},);
})
$('#bouton2').mouseleave(function(){

$('#bouton2').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
})
$('#bouton2').click(function(){

$('#bouton2').text('attendez quelques secondes ...');
});
$('#bouton1').mouseenter(function(){

    $('#bouton1').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"500px"},);
    })
    $('#bouton1').mouseleave(function(){
    
    $('#bouton1').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
    })
    $('#bouton1').click(function(){
    
    $('#bouton1').text('attendez quelques secondes ...');
    });
});
$(document).ready(function(){
            $('.title').show(4000);
            $('#contact').show(5000);
            

    })

const text=document.querySelector('.div1');
const paratext='Learn How The Top 1% Closers Close 12 Clients Per Month on Average, with Simple DM Closing Scripts';
let i = 0;
const interval=setInterval(() => {
text.innerHTML+=paratext[i];

    i++;
    if(i >= paratext.length){
        clearInterval(interval)
    }
}, 90);






const title=document.querySelector('.sec');
const paratitle='what others are saying about us';
let o = 0;
const intervale=setInterval(() => {
title.innerHTML+=paratitle[o];
    o++;
    if(o >= paratitle.length){
        clearInterval(intervale)
    }
}, 90);


$(document).ready(function(){
    $('.boutton').mouseenter(function(){
        $('#contact').css({"font-weight": "bolder","color":"white","text-shadow":" antiquewhite 1px 5px 5px"})
    

    })
    $('.boutton').mouseleave(function(){
        $('#contact').css({"font-weight": "bold","color":"white","text-shadow":" antiquewhite 0 0px 0px"})
    

    })
})
const txt = document.querySelector('#titre');
const paratxt='Adam Clostro';
let l = 0;
const intervaal=setInterval(() => {
    txt.innerHTML+=paratxt[l];
    l++;
    if(l >= paratxt.length){
        clearInterval(intervaal)
    }

}, 190);

















   


  