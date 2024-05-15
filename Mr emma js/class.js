// create the regster function;
function register(){
    let fname = document.querySelector('#fname').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    document.querySelector('#msg').innerHTML = fname+", "+email+", "+pass; 
    if(fname=='' || email==''||pass==''){
        res = 'incomplete fields!'
    }else{
        if(fname.length<3){
            res = 'Name too short'
        }
        else if(email.indexOf('@')=='-1' || email.indexOf('.com')=='-1'){
            res = 'invalid email'
        }
        else if(fname.indexOf('First name')=='-1' || fname.indexOf('Last name')=='-1'){
            res = 'Input First name & Last name'
        }
    }
    document.querySelector('#msg').innerHTML = res;
}


//return a conditional stmt, if email is empty returning invalid, if not return true
//checking for the .com extension and check for first name & last name 