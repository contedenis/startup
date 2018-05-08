document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    let sport = document.getElementById("sport").value;
    let bio = document.getElementById("bio").value;

    //firstName validate
	if (firstName != "") {
        let characters = firstName.length;
		let expresion = /^[a-zA-Z]+$/;

        if (characters < 3) {
            document.getElementById('firstNameHelp').innerHTML = 'It must be greater than 2 characters..';
        } 
        else {
            document.getElementById('firstNameHelp').innerHTML = '';
        }

        if (!expresion.test(firstName)){
            document.getElementById('firstNameHelp').innerHTML = 'Without special characters..';	
        }
    }
    else{
        firstName = "";
    }

    // //lastName validate
    if (lastName != "") {
		let characters = lastName.length;
		let expresion = /^[a-zA-Z]+$/;

		if (characters < 3) {
            document.getElementById('lastNameHelp').innerHTML = 'It must be greater than 2 characters..';
        }
        else{
            document.getElementById('lastNameHelp').innerHTML = '';
        }

		if (!expresion.test(lastName)){
            document.getElementById('lastNameHelp').innerHTML = 'Without special characters..';	
        }
    }
    else{
        lastName = "";
    }
    
    //email validate
	if (email!="") {

		var secEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

		if (!secEmail.test(email)){
			document.getElementById('emailHelp').innerHTML = 'Write your email correctly..';	
        }
        else{
            document.getElementById('emailHelp').innerHTML = '.';
        }
    }
    else{
        email = "";
    }
    
    if(firstName != "" && lastName != "" && email != ""){
        let html = 
        `<table border="1">
            <thead>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Birthday</th>
                <th>Sport</th>
                <th>Bio</th>
            </thead>
            <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${birthday}</td>
            <td>${sport}</td>
            <td>${bio}</td>
            </tr>
        </tabla>
        `;
    
        document.getElementById("returnForm").innerHTML = html;
    }
})