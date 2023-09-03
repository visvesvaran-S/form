function formvalidation() {
    var obj={ names: document.getElementById(`name`).value,
      email: document.getElementById('email').value,
     password: document.getElementById('password').value

    }

   if( obj.names === ""){
    alert('enter your name')
   }

    localStorage.setItem("user",JSON.stringify(obj))
}