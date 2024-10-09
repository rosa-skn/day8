function  houdini(name){
    $('#' + name).hide(); 
    $('.' + name).hide();
}
$(document).ready(function() {
    houdini('disappear'); 
});
