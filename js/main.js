// videoplayers declareren
var player1 = videojs('#video1');
var player2 = videojs('#video2');
var player3 = videojs('#video3');
var player4 = videojs('#video4');
var player5 = videojs('#video5');










// VIDEOPLAYERS STYLEN
player1.fluid('true');
player2.fluid('true');
player3.fluid('true');
player4.fluid('true');
player5.fluid('true');

$(function () {
    $("#accordion").accordion({
        animate: 800,
        heightStyle: "content",
        collapsible: true
    });
});

// lelijke default padding weghalen rondom video's
    $(function() {
        $(".ui-accordion-content").css( { 'padding': '0', 'margin-bottom': '10px'});
    });

// rand weghalen headers
    $(function () {
        $('.ui-state-default').css({ 'background': '#F4F2FF', 'border': 'none' });
    });










// SLICK
$(".regular").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1 
        }
        },
 
    {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1 },
        
    }

    ]
});










// FORWARD/BACKWARD BUTTONS
$(".backward-btn-01").click(function () {
   player1.currentTime(player1.currentTime() - 5);
});

$(".forward-btn-01").click(function () {
   player1.currentTime(player1.currentTime() + 5);
});

$(".backward-btn-02").click(function () {
   player2.currentTime(player2.currentTime() - 5);
});

$(".forward-btn-02").click(function () {
   player2.currentTime(player2.currentTime() + 5);
});

$(".backward-btn-03").click(function () {
   player3.currentTime(player3.currentTime() - 5);
});

$(".forward-btn-03").click(function () {
   player3.currentTime(player3.currentTime() + 5);
});

$(".backward-btn-04").click(function () {
   player4.currentTime(player4.currentTime() - 5);
});

$(".forward-btn-04").click(function () {
   player4.currentTime(player4.currentTime() + 5);
});

$(".backward-btn-05").click(function () {
   player5.currentTime(player5.currentTime() - 5);
});

$(".forward-btn-05").click(function () {
   player5.currentTime(player5.currentTime() + 5);
});










// PLAY & PAUSE TOGGLE
$('.play-button01').click(function(event){
   event.preventDefault();
   if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.play').attr("src", "../img/play.png");
        player1.pause();
   } else {
       ($(this).addClass('pause'))
       player1.play();
       $('.play').attr("src", "../img/pause.png");
   }
});



$('.play-button02').click(function(event){
   event.preventDefault();
   if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.play').attr("src", "../img/play.png");
       player2.pause();
   } else {
       ($(this).addClass('pause'))
       $('.play').attr("src", "../img/pause.png");
       player2.play();
   }
});



$('.play-button03').click(function(event){
   event.preventDefault();
   if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.play').attr("src", "../img/play.png");
       player3.pause();
   } else {
       ($(this).addClass('pause'))
       $('.play').attr("src", "../img/pause.png");
       player3.play();
   }
});



$('.play-button04').click(function(event){
   event.preventDefault();
   if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.play').attr("src", "../img/play.png");
       player4.pause();
   } else {
       ($(this).addClass('pause'))
       $('.play').attr("src", "../img/pause.png");
       player4.play();
   }
});



$('.play-button05').click(function(event){
   event.preventDefault();
   if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        $('.play').attr("src", "../img/play.png");
       player5.pause();
   } else {
       ($(this).addClass('pause'))
       $('.play').attr("src", "../img/pause.png");
       player5.play();
   }
});





// MODALS
 var playerWrap = $('#video1');
    player1.on('timeupdate',function(){
        var time01 = player1.currentTime();
        var duration01 = player1.duration();

        if (time01 >= duration01){
 
            playerWrap.append($('.modal01'));
            playerWrap.append($('.modal01 .modal-content01'));
            $('.modal01 .modal-content01').append($('.modal01 .modal-titel'));
            $('.modal01 .modal-content01').append($('.modal01 .modal-tekst'));
            $('.modal01 .modal-content01').append($('.modal01 .close'));
        }

        var kruisje = $('.modal01 .close');
        $(kruisje).click (function() {
            $('.modal01').css({'display': 'none'});
            $('.modal-content01').css({'display': 'none'});
        }); 
    });


    var playerWrap02 = $('#video2');
    player2.on('timeupdate',function(){
        var time02 = player2.currentTime();
        var duration02 = player2.duration();

        if (time02 >= duration02){

            playerWrap02.append($('.modal02'));
            playerWrap02.append($('.modal02 .modal-content02'));
            $('.modal02 .modal-content02').append($('.modal02 .modal-titel'));
            $('.modal02 .modal-content02').append($('.modal02 .modal-tekst'));
            $('.modal02 .modal-content02').append($('.modal02 .close'));
        }

        var kruisje = $('.modal02 .close');
        $(kruisje).click (function() {
            $('.modal02').css({'display': 'none'});
            $('.modal-content02').css({'display': 'none'});
        }); 

    });


    var playerWrap03 = $('#video3');
    player3.on('timeupdate',function(){
        var time03 = player3.currentTime();
        var duration03 = player3.duration();

        if (time03 >= duration03){

            playerWrap03.append($('.modal03'));
            playerWrap03.append($('.modal03 .modal-content03'));
            $('.modal03 .modal-content03').append($('.modal03 .modal-titel'));
            $('.modal03 .modal-content03').append($('.modal03 .modal-tekst'));
            $('.modal03 .modal-content03').append($('.modal03 .close'));
        }

        var kruisje = $('.modal03 .close');
        $(kruisje).click (function() {
            $('.modal03').css({'display': 'none'});
            $('.modal-content03').css({'display': 'none'});
        }); 

    });


    var playerWrap04 = $('#video4');
    player4.on('timeupdate',function(){
        var time04 = player4.currentTime();
        var duration04 = player4.duration();

        if (time04 >= duration04){

            playerWrap04.append($('.modal04'));
            playerWrap04.append($('.modal04 .modal-content04'));
            $('.modal04 .modal-content04').append($('.modal04 .modal-titel'));
            $('.modal04 .modal-content04').append($('.modal04 .modal-tekst'));
            $('.modal04 .modal-content04').append($('.modal04 .close'));
        }

        var kruisje = $('.modal04 .close');
        $(kruisje).click (function() {
            $('.modal04').css({'display': 'none'});
            $('.modal-content04').css({'display': 'none'});
        }); 

    });


    var playerWrap05 = $('#video5');
    player5.on('timeupdate',function(){
        var time05 = player5.currentTime();
        var duration05 = player5.duration();

        if (time05 >= duration05){

            playerWrap05.append($('.modal05'));
            playerWrap05.append($('.modal05 .modal-content05'));
            $('.modal05 .modal-content05').append($('.modal05 .modal-titel'));
            $('.modal05 .modal-content05').append($('.modal05 .modal-tekst'));
            $('.modal05 .modal-content05').append($('.modal05 .close'));
        }

        var kruisje = $('.modal05 .close');
        $(kruisje).click (function() {
            $('.modal05').css({'display': 'none'});
            $('.modal-content05').css({'display': 'none'});
        }); 

    });










// NAV TOGGLE
$('#toggle').click(function(event){
event.preventDefault();

if($(this).hasClass('dark')){
    $(this).removeClass('dark');


    $('body').css({'background-color':'white'});
    $('h1').css({'color':'white'});
    $('h2').css({'color':'white'});
    $('h3').css({'color':'#CC0085'});
    $('p').css({'color':'#CC0085'});
    $('header p').css({'color':'white'});
    $('footer p').css({'color':'white'});


    $('header').css({'background-image':'url(../img/hero@2x.png)'});
    $('nav').css({'background-color':'white', 'color':'black',
    '-webkit-box-shadow': '0px 10px 48px -19px rgba(204,0,133,1)',
    '-moz-box-shadow': '0px 10px 48px -19px rgba(204,0,133,1)',
    'box-shadow': '0px 10px 48px -19px rgba(204,0,133,1)' });
    $('#c4k-logo').attr('src', 'img/logo@2x.png');
    $('nav ul li').css({'color':'#CC0085'});
    $('.buitenkant-knop').css({'background-color':'#FFAFE3'});
    $('.binnenkant-knop').css({'float':'left'});


    $('.thumb').css({'background-color':'white', 'color': '#CC0085'});
    $('#leer').attr("src", "img/leer.svg")
    $('#codeer').attr("src", "img/codeer.svg");
    $('#speel').attr("src", "img/speel.svg");


    $('.ui-state-default').css({'background-color':'#F4F2FF'});
    $('.ui-accordion-header').css({'color':'#CC0085'});
    $('.ui-state-focus').css({'outline': 'solid #CC0085 1px'})


    $('.modal01').css({'background': 'rgb(204,0,133)', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, rgba(255,223,49,0) 100%)'})
    $('.modal02').css({'background': 'rgb(204,0,133)', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, rgba(255,223,49,0) 100%)'})
    $('.modal03').css({'background': 'rgb(204,0,133)', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, rgba(255,223,49,0) 100%)'})
    $('.modal04').css({'background': 'rgb(204,0,133)', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, rgba(255,223,49,0) 100%)'})
    $('.modal05').css({'background': 'rgb(204,0,133)', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, rgba(255,223,49,0) 100%)'})

    $('.modal-content01').css({'background': '#F4F2FF'});
    $('.modal-content02').css({'background': '#F4F2FF'});
    $('.modal-content03').css({'background': '#F4F2FF'});
    $('.modal-content04').css({'background': '#F4F2FF'});
    $('.modal-content05').css({'background': '#F4F2FF'});

    $('.close').css({'color': '#CC0085'});

    $('.cta-contact').css({'background-color':'#CC0085'});
    $('.cta-mail').css({'background-color':'#CC0085'});
    $('.sliderContent').css({'background-color':'#F4F2FF'});
    $('.sliderContent h3').css({'color':'#CC0085'});


    $('footer').css({'background-image':'url(../img/footer-img@2x.png)'});
    $('footer a').css({'color':'#CC0085'});
    $('footer .cta').css({'background-color':'white'});


}   else{
    ($(this).addClass('dark'))

    $('body').css({'background-color':'#1d1d1d'});
    $('h1').css({'color':'white'});
    $('h2').css({'color':'white'});
    $('h3').css({'color':'white'});
    $('p').css({'color':'white'});


    $('header').css({'background-image':'url("../img/hero-blue@2x.png")'});
    $('nav').css({'background-color':'blue', 'color':'white',
    '-webkit-box-shadow': '0px 10px 48px -19px blue',
    '-moz-box-shadow': '0px 10px 48px -19px blue',
    'box-shadow': '0px 10px 48px -19px blue'});
    $('#c4k-logo').attr("src", "img/logo-wit@2x.png");
    $('nav ul li').css({'color':'white'});
    $('.buitenkant-knop').css({'background-color':'#0076FF'});
    $('.binnenkant-knop').css({'float':'right'});


    $('.thumb').css({'background-color':'blue', 'color': 'white'});
    $('#leer').attr("src", "img/leer-wit.svg");
    $('#codeer').attr("src", "img/codeer-wit.svg");
    $('#speel').attr("src", "img/speel-wit.svg");


    $('.ui-state-default').css({'background-color':'blue'});
    $('.ui-accordion-header').css({'color':'white'});
    $('.ui-state-focus').css({'outline': 'solid #FFFFFF 1px'});
    
    $('.modal01').css({'background': 'blue', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, blue 100%)'});
    $('.modal02').css({'background': 'blue', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, blue 100%)'});
    $('.modal03').css({'background': 'blue', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, blue 100%)'});
    $('.modal04').css({'background': 'blue', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, blue 100%)'});
    $('.modal05').css({'background': 'blue', 'background': 'linear-gradient(45deg, rgba(204,0,133,0.6516981792717087) 0%, blue 100%)'});

    $('.modal-content01').css({'background': '#FFFFFF'});
    $('.modal-content02').css({'background': '#FFFFFF'});
    $('.modal-content03').css({'background': '#FFFFFF'});
    $('.modal-content04').css({'background': '#FFFFFF'});
    $('.modal-content05').css({'background': '#FFFFFF'});

    $('.close').css({'color': 'blue'});
    $('.modal-titel').css({'color': 'blue'});
    $('.modal-tekst').css({'color': 'blue'});

    $('.cta-contact').css({'background-color':'blue'});
    $('.cta-mail').css({'background-color':'#0076FF'});
    $('.sliderContent').css({'background-color':'blue'});
    $('.sliderContent h3').css({'color':'white'});


    $('footer').css({'background-image':'url(../img/footer-img-blue@2x.png)'});
    $('footer a').css({'color':'white'});
    $('footer .cta').css({'background-color':'blue'});
}
});
