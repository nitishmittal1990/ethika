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
    });
})();