$(document).ready(function(){

	//Europe
	$("#linkEurope").mouseenter(function(){
		 $("#europe").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#europedestination").show("slow");
	});
	$("#linkEurope").mouseleave(function(){
		 $("#europe").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#europedestination").hide();
		 $("#alldestination").show("slow");
	});

	//Africa
	$("#linkAfrica").mouseenter(function(){
		 $("#africa").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#africadestination").show("slow");
	});
	$("#linkAfrica").mouseleave(function(){
		 $("#africa").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#africadestination").hide();
		 $("#alldestination").show("slow");
	});


	//Asia
	$("#linkAsia").mouseenter(function(){
		 $("#asia").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#asiadestination").show("slow");
	});
	$("#linkAsia").mouseleave(function(){
		 $("#asia").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#asiadestination").hide();
		 $("#alldestination").show("slow");
	});

	//Oceania
	$("#linkOceania").mouseenter(function(){
		 $("#oceania").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#oceaniadestination").show("slow");
	});
	$("#linkOceania").mouseleave(function(){
		 $("#oceania").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#oceaniadestination").hide();
		 $("#alldestination").show("slow");
	});

	//USA
	$("#linkUsa").mouseenter(function(){
		 $("#usa").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#usadestination").show("slow");
	});
	$("#linkUsa").mouseleave(function(){
		 $("#usa").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#usadestination").hide();
		 $("#alldestination").show("slow");
	});

	//south america
	$("#linkSouth-america").mouseenter(function(){
		 $("#south-america").animate({
	        opacity: '1',
	        scale : '1'
	    }, "slow");
		 $("#alldestination").hide();
		 $("#sadestination").show("slow");
	});
	$("#linkSouth-america").mouseleave(function(){
		 $("#south-america").animate({
	        opacity: '0',
	        scale : '0.97'
	    }, "slow");
		 $("#sadestination").hide();
		 $("#alldestination").show("slow");
	});



    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

    $("#linkEurope").click(function(){
    	$("#europeBtn").trigger('click');
    });
    $("#linkAfrica").click(function(){
    	$("#africaBtn").trigger('click');
    });
    $("#linkAsia").click(function(){
    	$("#asiaBtn").trigger('click');
    });
    $("#linkOceania").click(function(){
    	$("#oceaniaBtn").trigger('click');
    });
    $("#linkUsa").click(function(){
    	$("#usaBtn").trigger('click');
    });
    $("#linkSouth-america").click(function(){
    	$("#samericaBtn").trigger('click');
    });

jQuery.fn.extend({
 animateCount : function (from, to, time,steps) {
       var self = this,
       counter;

   if (from - to > 0) {
     steps = -1;
   };

   from -= steps;

   function step() {
     self.text(from += steps).fadeIn(20);

     if ((steps < 0 && to >= from) || (steps > 0 && from >= to)) {
       clearInterval(counter);
     };
   };

   counter = setInterval(step, time || 150);
 }
});

    $(window).scroll(function() {
    	var x = $(this).scrollTop();
    //var y = $(this).scrollDown();

	    if(x >= $(".count-section").offset().top - $(window).height()/2)
	    {
	       
			$('#counter1').animateCount(1,3100,50,100);
			$('#counter2').animateCount(1,280,10,10);
			$('#counter3').animateCount(1,620,30,20);
			$('#counter4').animateCount(1,175,5,5);
	    }
});


});