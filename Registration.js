let error = document.getElementById("error");

function validate(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cfpass = document.getElementById("cf-pass").value;
    let dob= document.getElementById("dob").value;
    let agree = document.getElementById("agree");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let nowDate = new Date();
    let dobDate = new Date ();
    console.log (error)

    let age = nowDate.getFullYear()- dobDate.getFullYear();

    if(username == null){
        alert("Username must be filled >_<:")
    }

    if(username.length <3 || username.length >15){
      alert("Username must be 3-15 character!")
      return false;
    }

    if(!email.endsWith("@gmail.com")) {
        alert("email must end with '@gmail.com'")
        return false;
    }
     
    if(cfpass !== password){
        alert(
            "confirm password must be same with password"
        )
        return false;
    
    }

    if(!agree.checked) {
            alert(
                "you must agree terms& policy to proceed"
            )
            return false;
        }
    if (!male.checked && !female.checked){
        alert ("you must choose gender!")
        return false;
    }
    if (age<18)
        {
            alert("Minimum Age is 18")
            return false;
        }
    }