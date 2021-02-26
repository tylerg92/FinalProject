$('#submitText').click(function(){
    $('.newPost').append(`
    <div class = userPost><img id=icon src="images/userIcon.png" alt="usericon">
    <p class= firstP>${  $('#display').val()}</p>
    <p class= secondP>${  $('#comment').val()}</p>
    <div class= edit>Edit</div>
    <div class= delete>Delete</div>
    <div class= newSubmit> </div>
    </div>`)
})