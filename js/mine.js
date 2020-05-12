var comment=document.getElementById('comment');
var content=document.getElementById('content');
var turtle=document.getElementById('turtle');
var green=document.getElementById('green');
var bamboo=document.getElementById('bamboo');
var unthick=document.getElementById('unthick');
var myButton=document.getElementById('myButton');
function ChangeComment(obj){
		comment.innerHTML=obj.innerHTML+" <span class='caret'></span>";
}
function deliver(){
	turtle.innerHTML=turtle.innerHTML+"<a href='#' class='list-group-item list-group-item-info'><h4 class='list-group-item-heading'>"+content.value+"</h4><p class='list-group-item-text'>——匿名</p>";
	alert("发表成功");
	
}
myButton.on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
})