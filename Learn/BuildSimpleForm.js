function login(){
    let email,pass = document.getElementById('pass').value;
    email = document.getElementById('email').value;
    if(email==''){
        msg = 'Username Empty!'
    } 
    else if(pass==''){
        msg = 'Password Empty!'
    } 
    else {
        msg = 'Okay....Login Processing!';
        newLogin = {
            'user': email,
            'pass': pass
        }
    }
    document.getElementById('msg').innerHTML = msg;
}