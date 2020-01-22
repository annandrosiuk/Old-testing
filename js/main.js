$(document).ready(function(){

  if ($('#language-selected').is(':empty')){
	  $( ".menu li" ).each(function() {
	    if($(this).attr('class') == 'selected'){
	    	var selected = $(this).find('.lang-code').html().toUpperCase();
	        console.log($(this).find('.lang-code').html().toUpperCase());
	        $("#language-selected").html(selected);
	    }
	  });
	}

	//The next following line displays and set selected language
	  $(".dropdownbox").click(function(){
		$(".menu").toggleClass("showMenu");
		  $(".menu > li").click(function(){
		    var selected = $(this).find('.lang-code').html().toUpperCase();
		    console.log($(this).find('.lang-code').html().toUpperCase());
		    $("#language-selected").html(selected);
		    $(".menu").removeClass("showMenu");	        
	      });
	  });
	
	  //Close language select box if nothing is selected
	  $("#dropdown-wrapper").mouseleave(function(){
		  $(".menu").removeClass("showMenu");
    });
    

    


    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '12em', //distance from center
    start = 225, //shift start from 0
    $elements = $('.menu-circle li:not(:first-child)'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});






  // Configure/customize these variables.
  var showChar = 340;  // How many characters are shown by default
  var ellipsestext = "...";
  var lesstext = "";

  var moretext = "Read more";
  

  $('.more').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
          
      } 

  });

  $(".morelink").click(function(){
    if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
      $(this).removeClass("less");
        $(this).html(moretext);
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});
  // /*------Show/hide burger menu list-------*/
  // $('.navigation-toggle').on('click',function() {

  //   if($('.navigation-target').hasClass('clicked')){
  //     $('.navigation-target').removeClass('clicked');
  //     $('.dropdown-menu').slideUp();
        
  //   }
  //   else{
  //     $('.navigation-target').addClass('clicked');
  //     $('.dropdown-menu').slideDown();
  //   }
  // });

  // /*------  -------*/
  // $('.navigation-toggle').on('click',function() {
  //   if($('.clear').hasClass('clear-plus')){
  //     $('.clear').removeClass('clear-plus');
  //   }
  //   else{
  //     $('.clear').addClass('clear-plus');
  //   }
  // });

  // /*------ Flex Text -------*/
  // flexFont = function () {
    
  //     var divs = document.getElementsByClassName("carousel-inner-div");
  //     for(var i = 0; i < divs.length; i++) {
  //         var relFontsize = divs[i].offsetWidth*0.03;
  //         divs[i].style.fontSize = relFontsize+'px';
  //         e.preventDefault();
  //         divs = divs[i+1];    
  //     }
  //   };
  
  //   window.onload = function(event) {
  //       flexFont();
        
  //   };
  //   window.onresize = function(event) {
  //       flexFont();
  //   };

  
});