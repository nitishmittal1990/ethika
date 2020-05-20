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

    });
})();