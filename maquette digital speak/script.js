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




$(document).ready(function(){
    $('.boutton').mouseenter(function(){
       
            $('.boutton').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"550px"},);
    })
    $('.boutton').mouseleave(function(){
       
        $('.boutton').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
})

$('#bouton2').mouseenter(function(){

$('#bouton2').css({"opacity":"0.8","text-shadow":" black 2px 1px 2px","width":"550px"},);
})
$('#bouton2').mouseleave(function(){

$('#bouton2').css({"opacity":"1","text-shadow":" black 0px 0px 0px","width":"450px"});
})


});
$(document).ready(function(){
    $('.title').show(5000);
    
    

})




