 var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1500, 'swing');
            hashTagActive = this.hash;
        }
    });

//add background color when menu clicked
$("button").click(function(){
    $(".navbar-default").addClass("bg-navbar");
}); 

//remove background color and close the menu when link clicked
$('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    $('.navbar-default').removeClass('bg-navbar');
});


$(function(){
	
	$.ajax({
	  type: 'GET',
	  url: 'http://gateway.marvel.com:80/v1/public/stories?comics=25&apikey=5005d198aef54a39e7f85e63d6cfe7e8',
	  success: function(data) {
	    console.log(data.data);
	  }
        });
});

