$(document).ready(function(){
    $("button").click(function () {
        $(".kwadrat").animate({
            left: '100px',
            height:'100px',
            width:'100px'
        },
        {
            duration: 3000,
            complete: function() { 
            $(this).animate({
                backgroundColor: "blue" 
              }, {
                  duration:5000,
                  complete: function(){
                    $(this).append("<h2>Koniec animacji</h2>")
                  }
              });
              
            }
        });
    
    });
})







