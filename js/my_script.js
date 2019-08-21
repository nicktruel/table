$(document).ready(function(){
  /*  $("tr:odd").addClass("selection");
    $("tr:even").addClass("selection2");*/
    
    $("th").click(function(){
        $("tr").children().removeClass("selection");
        $(this).siblings().addClass("selection");
       
    })
    
});