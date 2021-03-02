$('#submitText').click(function(){
    $('.newPost').append(`
    <div class = userPost>
    <img id=icon src="images/userIcon.png" alt="usericon">
    <p class= firstP>${  $('#display').val()}</p>
    <p class= secondP>${  $('#comment').val()}</p>
    <div class= edit>Edit</div>
    <div class= delete>Delete</div>
    <div class= newSubmit> 
    <input id=newComment placeholder = "Comment">
    <div id = newButton>Submit</div>
    </div>
    </div>`)
});

$('.newPost').on('click', '.edit', function(){
    let parentEdit = $(this).parent();
    let  childEdit = $(parentEdit).children()[5]
    $(childEdit).css('display', 'flex')
});

$('.newPost').on('click', "#newButton",function(){
    let parentNew = $(this).parent();
    $(parentNew).css('display', 'none');
    let firstText = $(this).parent();
    let secondText = $(firstText).parent();
    let finalText = $(secondText).children()[2]
    let firstComment = $(this).parent();
    let secondComment = $(firstComment).children()[0]
    $(finalText).text($(secondComment).val())
})
$('.newPost').on('click', '.delete', function(){
let parentDel = $(this).parent()
$(parentDel).remove();
console.log(parentDel)
  });
 
  
