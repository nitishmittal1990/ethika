(function() {
    var $ = jQuery;
    
    $(document).ready(function() {

        // console.log("working");
        $('#takeawayE').on('click','li',function(e){
            console.log("hi");
            $(this).toggleClass('active');
        })
    });
})();