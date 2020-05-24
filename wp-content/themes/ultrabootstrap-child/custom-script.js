(function() {
    var $ = jQuery;
    
    $(document).ready(function() {
        
        // console.log("working");
        $('#takeawayE').on('click','li',function(e){
            $(this).toggleClass('active');
        })
        $('#faqList').on('click', 'li', function (e) {
            $(this).toggleClass('active');
        })

        $('#homesec2Img').on('click', function (e){
            $(this).remove();
            const youtubeVid = '<iframe id="youVid" width="100%" height="315" src="https://www.youtube.com/embed/g4a1Iil87-Y" frameborder="0" allow="accelerometer; autoplay="1" encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $('#videoHome').html(youtubeVid);
            $("#youVid")[0].src += "?autoplay=1";
        })

        const vid1 = '<iframe id="vid1i" width="100%" height="315" src="https://www.youtube.com/embed/1ocGjeGl7HQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        const vid2 = '<iframe id="vid2i" width="100%" height="315" src="https://www.youtube.com/embed/kauEyyH45G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        const vid3 = '<iframe id="vid3i" width="100%" height="315" src="https://www.youtube.com/embed/Mk9HLqbsSo0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        const vid4 = '<iframe id="vid4i" width="100%" height="315" src="https://www.youtube.com/embed/YY8ZFYNxPnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        const vid5 = '<iframe id="vid5i" width="100%" height="315" src="https://www.youtube.com/embed/ek-NDorfJpE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $('.vidwrap').on('click', function(e){
            e.stopPropagation();
            $(this).children().remove();
            const getDivID = '#' + $(this).attr("id");
            if(getDivID === '#vid1') {
                $(getDivID).html(vid1);
                $("#vid1i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#vid2') {
                $(getDivID).html(vid2);
                $("#vid2i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#vid3') {
                $(getDivID).html(vid3);
                $("#vid3i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#vid4') {
                $(getDivID).html(vid4);
                $("#vid4i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#vid5') {
                $(getDivID).html(vid5);
                $("#vid5i")[0].src += "?autoplay=1";
            }
        })
		
		///Rajkumar
		
	 $(".tvideos a").click(function(e) {
        e.preventDefault();
         $("#vFrame").attr("src", $(this).attr("href"));
		$(".tvideos a").removeClass("active");
       $(this).addClass("active");
		$(".ndisplay").css("display", "block");
		$("html, body").animate({ scrollTop: 500 }, "slow");
    });
	
	///Same Format 
	const tvid1 = '<iframe id="tvid1i" width="100%" height="450" src="https://www.youtube.com/embed/hliws-S_928" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid2 = '<iframe id="tvid2i" width="100%" height="315" src="https://www.youtube.com/embed/ek-NDorfJpE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid3 = '<iframe id="tvid3i" width="100%" height="315" src="https://www.youtube.com/embed/SZi9nM-UKes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid4 = '<iframe id="tvid4i" width="100%" height="315" src="https://www.youtube.com/embed/yUEs8TxDfbI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid5 = '<iframe id="tvid5i" width="100%" height="315" src="https://www.youtube.com/embed/36kjuhnJLTk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid6 = '<iframe id="tvid6i" width="100%" height="315" src="https://www.youtube.com/embed/1ocGjeGl7HQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid7 = '<iframe id="tvid7i" width="100%" height="315" src="https://www.youtube.com/embed/Mk9HLqbsSo0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid8 = '<iframe id="tvid8i" width="100%" height="315" src="https://www.youtube.com/embed/YY8ZFYNxPnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid9 = '<iframe id="tvid9i" width="100%" height="315" src="https://www.youtube.com/embed/ycHGv9zWOsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid10 = '<iframe id="tvid9i" width="100%" height="315" src="https://www.youtube.com/embed/kauEyyH45G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		const tvid11 = '<iframe id="tvid9i" width="100%" height="315" src="https://www.youtube.com/embed/g4a1Iil87-Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		
		
		    $('.tvidwrap').on('click', function(e){
            e.stopPropagation();
            $(this).children().remove();
            const getDivID = '#' + $(this).attr("id");
            if(getDivID === '#tvid1') {
                $(getDivID).html(tvid1);
                $("#tvid1i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#tvid2') {
                $(getDivID).html(tvid2);
                $("#tvid2i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#tvid3') {
                $(getDivID).html(tvid3);
                $("#tvid3i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#tvid4') {
                $(getDivID).html(tvid4);
                $("#tvid4i")[0].src += "?autoplay=1";
            }
            if (getDivID === '#tvid5') {
                $(getDivID).html(tvid5);
                $("#tvid5i")[0].src += "?autoplay=1";
            }
			 if (getDivID === '#tvid6') {
                $(getDivID).html(tvid6);
                $("#tvid6i")[0].src += "?autoplay=1";
            }
			 if (getDivID === '#tvid7') {
                $(getDivID).html(tvid7);
                $("#tvid7i")[0].src += "?autoplay=1";
            }
			if (getDivID === '#tvid8') {
                $(getDivID).html(tvid8);
                $("#tvid8i")[0].src += "?autoplay=1";
            }
			if (getDivID === '#tvid9') {
                $(getDivID).html(tvid9);
                $("#tvid9i")[0].src += "?autoplay=1";
            }
        })
		

    });
	
	
	
 
	
	
	
	
})();