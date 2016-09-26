// 1. 
var favorite = prompt("what is your favorite number?", "0");

if (favorite % 2 == 0) {
    document.write("even");
}
else {
    document.write("odd");
}

// 2. 
var month = prompt("month", "0");

if (0 >= month || month <= 13) {
    document.write(";;");
}
else if (3 <= month && month <= 5) {
    document.write("spring");
}
else if (6 <= month && month <= 8) {
    document.write("summer");
}
else if (9 <= month && month <= 11) {
    document.write("fall");
}
else {
    document.write("winter");
}

// 3. 
//<input id="id"/>
//<input id="password" type="password"/>
//<button onclick="OKClicked()">OK</button>

var id = "admin";
var password = "1234";


function OKClicked() {
    var userId = document.getElementById("id").value;
    var userPassword = document.getElementById("password").value;

    if (userId == id) {
        if (userPassword == password) {
            document.write("Hello, " + userId);
        }
        else {
            alert("wrong password");
            location.reload();
        }
    }
    else {
        alert("wrong id");
        location.reload();
    }
}
