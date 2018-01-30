$(function(){
    //alert("hi");
    $('#tabs').tabs().tabs("add", "#","close");
    $("#datepicker").datepicker({
        onSelect: function(dateText, inst){
            $('#title').text("You picked" + dateText);
        }
    });
});