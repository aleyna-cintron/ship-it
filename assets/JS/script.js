(function(){
    
    // Hide edit form div
    document.querySelector("#edit").style.display = "none";

    // Hide Login Credentials
    loginInfo = document.querySelector("#output").children;
    loginInfo[0].style.display = "none";


    // Create function for when login-btn and edit-btn is clicked
    document.querySelector("#login-btn").addEventListener("click", Login);
    document.querySelector("#edit-btn").addEventListener("click", editProfile);

    // Set default username and password
    let user = {name: "admin", password: "12345"};

    
    
    // Login 
    function Login(e){

        // Login form Validation
        if (document.querySelector("#username").reportValidity() && document.querySelector("#password").reportValidity()){

            // Store username and password values into variables
            let userName = document.querySelector("#username").value;
            let userPassword = document.querySelector("#password").value;

            // Check if login-btn has already been clicked once
            if (document.querySelector("#login-btn").classList.contains("clicked")){

                // Conditional to prevent login credentials from displaying again
                if (document.querySelector("#login-btn").classList.contains("showText")){
                    alert(`You're already logged in ${user.name}.`);
                }
                // Show login credentials
                else{
                    loginInfo[0].style.display = "block"

                    // Check login credentials are correct 
                    if (userName == user.name && userPassword == user.password){
                        alert(`Thanks for logging in ${user.name}!`)
                    }
                    // If login credentials don't match then throw an alert error message.
                    else {
                        alert("Either the username or password is incorrect. Please try again.");
                    };
        
                    // Output new login information
                    for (const prop in user) {
                        let node = document.createElement("li");
                        let textnode = document.createTextNode(`${prop}: ${user[prop]}`);
                        node.appendChild(textnode);
                        document.querySelector("#output").appendChild(node);
                    };

                    // Give login-btn a class so that the login credentials show once
                    document.querySelector("#login-btn").classList.add("showText")
                };
            }
            // If login-btn hasn't been clicked already...
            else {
                // Check if username and password match account information
                if (userName == user.name && userPassword == user.password){
                    document.querySelector("#login").style.display = "none";
                    document.querySelector("#edit").style.display = "block";
                }
                // If login credentials don't match then throw an alert error message.
                else {
                    alert("Either the username or password is incorrect. Please try again.");
                };
            };
        }
    };

    // Edit account login information
    function editProfile(e){

        // Edit form Validation
        if (document.querySelector("#newUsername").reportValidity() && document.querySelector("#newPassword").reportValidity()){

            // Give login-btn a class 
            document.querySelector("#login-btn").classList.add("clicked");

            // Store edited values for username and password in variables
            let userName = document.querySelector("#newUsername").value;
            let userPassword = document.querySelector("#newPassword").value;

            // Run function to update username and password
            user = createUser(userName, userPassword);

            // Display login form, hide update form
            document.querySelector("#login").style.display = "block";
            document.querySelector("#edit").style.display = "none";

            // Change values of login form to updated username and password
            document.querySelector("#username").value = user.name;
            document.querySelector("#password").value = user.password;
        }
    };
})();
// Update user object
function createUser(un, pw){
    return user = {name:un, password:pw }
};