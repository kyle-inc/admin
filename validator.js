function checkPswd() {
    var confirmPassword = "adminconsole4kyle_gainaccess";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
        window.location = "admin.php";
    }
    else {
        window.location = "https://kyle-inc.github.io/admin/action_page?email=";
        alert("Admin ID or Password is incorrect or mightbe empty");
    }
}
