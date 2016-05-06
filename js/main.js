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

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$(function(){
	var containerstories = [];
	var charactersobj = [];
	var containercharacters = [];
	
	
	$.ajax({
	  type: 'GET',
	  url: 'http://gateway.marvel.com:80/v1/public/stories/838',
	  data: { 'apikey' :'5005d198aef54a39e7f85e63d6cfe7e8' },
	  success: function(data) {
	  	containerstories = data.data.results;

		$.each(containerstories, function(i, containerstories){
		console.log(containerstories.title);//title
			$(".storytitle").append('<h1>' + containerstories.title + '</h1>');
		console.log(containerstories.description);//description
			$(".storydescription").append('<p>' + containerstories.description + '</p>');

		charactersobj = containerstories.characters;
		console.log(charactersobj);//chars obj
		});
			
		//>>
			var thumbs = [];
			var containercharacters = [];
			var imagevariant = 'portrait_uncanny';
			var thumbsext = [];

			 $.ajax({
    	  		
	  		  type: 'GET',
	  		  url: charactersobj.collectionURI,
	  		  data: { 'apikey' :'5005d198aef54a39e7f85e63d6cfe7e8' },
	  		  success: function(data) {
	  		  	containercharacters = data.data.results;
				console.log(containercharacters);//array of chars obj

				$.each(containercharacters, function(i, containercharacters){
				console.log(containercharacters.name);//NAME of chars
					$(".name").append('<h2>' + containercharacters.name + '</h2>');
				console.log(containercharacters.thumbnail);//Thumbnail Object
					thumbs.push(containercharacters.thumbnail);
				});
				
					$.each(thumbs, function(i, thumbs){
					console.log(thumbs.path);//thumb url
					console.log(thumbs.extension);//thumb ext
						thumbsext.push(thumbs.path + '/' + imagevariant + '.' + thumbs.extension);
					console.log(thumbsext);	

					});					
	  		    
	  		  }//success closes
	  		  
	  	    });// do not touch - ajax and function closes
		
		//>>end of API call
	  
	  }//success closes


	  // do not touch - ajax and function closes
    });

//function closes
});	
			

