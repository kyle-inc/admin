function checkPswd() {
    var confirmPassword = "adminconsole4kyle_gainaccess";
    var password = document.getElementById("pswd").value;
    var confirmEmail = "86187229927842";
    var email = document.getElementById("username").value;
    if (password == confirmPassword & email == confirmEmail) {
        window.location = "admin.php";
    }
    else {
        // window.location = "https://kyle-inc.github.io/admin/action_page"; (It dont give that ?= url)
        // alert("Admin ID or Password is incorrect or mightbe empty");
    }
}


// < !--Function to check password-- >
//     <script type="text/javascript">
//         function checkPswd() {
//                 var confirmPassword = "adminconsole@kyle_gainaccess";
//         var password = document.getElementById("pswd").value;
//         if (password == confirmPassword) {
//             window.location = "admin.php";
//                 }
//         else{
//             window.location = "action_page.html";
//         alert("Admin ID or Password is incorrect or mightbe empty");
//                 }
//             }
//     </script>