function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("chat-bot").style.display = "none";
    const myTimeout = setTimeout(showChat, 1500);
}

function showChat() {
    document.getElementById("chat1").style.display = "none";
    document.getElementById("chat2").style.display = "block";
    const myTimeout1 = setTimeout(showChat1, 1500);
}

function showChat1() {
    document.getElementById("chat3").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("chat-bot").style.display = "block";
    document.getElementById("chatBox").style.display = "flex";
    document.getElementById('chatUser').innerHTML = "";
    document.getElementById("chat4").style.display = "none";
    document.getElementById("chat1").style.display = "flex";
    document.getElementById("chat2").style.display = "none";
    document.getElementById("chat3").style.display = "none";
}

function chatSubmit() {
    let input = document.getElementById('chat-input').value;
    if(input && input.length>0){

    }
    else{
        alert("Please Input !")
        return
    }
    document.getElementById('chat-input').value = "";
    document.getElementById('chatUser').innerHTML = document.getElementById('chatUser').innerHTML+'<p>'+input+'</p>';
    const myTimeout = setTimeout(responseChat, 1500);
}

function responseChat() {
    document.getElementById("chat4").style.display = "flex";
    document.getElementById("chatBox").style.display = "none";
}

var input = document.getElementById("chat-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   chatSubmit()
  }
});