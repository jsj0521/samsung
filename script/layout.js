//layout.js

$(document).ready(function(){

  //세로스크롤 값 구하기
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos>=1100){
      $('header').addClass('act');//1. 배경색변경
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo-casper_black.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#333');

      //header에 마우스 아웃시 색상 어둡게
      $('header').mouseenter(function(){
        $('header').addClass('act');//1. 배경색변경
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo-casper_black.png');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fas').css('color','#333');
      });

    }else{
      $('header').removeClass('act'); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo-casper-white.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#fff');
    }
  });

  //화면스크롤 내리지 않고 헤더에 마우스 오버시 색상 변경
  $('header').hover(function(){
    $('header').addClass('act');//1. 배경색변경
    //2. 로고변경
    $('header h1 img').attr('src','./images/logo-casper_black.png');
    //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
    $('header .gnb > li > a, header i.fas').css('color','#333');
  }, function(){ //마우스 아웃시 다시 원래대로 색상 변경
    $('header').removeClass('act'); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo-casper-white.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#fff');
  });

  // 내비게이션 변수선언
  let gnb = $('.gnb li');

  gnb.click(function(){
    let i = $(this).index()+2;
    console.log(i); //2,3,4,5,6

    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},400, 'easeOutCubic');
    return false;
  });


});