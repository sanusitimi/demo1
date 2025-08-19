function confirmlogin() {
    if (document.getElementById("pswrd").value!=document.getElementById("cpswrd").value) {
    alert("Confirmation does not match with password. Please try again.");
    }
    else if (document.getElementById("mail").value=="") {
    alert("Please input an email address.");
    }
    else if (document.getElementById("pswrd").value.length<8) {
    alert("Password should be at least 8 characters.");
    } 
    else {
        location.href = "svpages.html";
    }
}

function gameprep() {
    location.href = "svgame.html";
}

function wakecat() {
    document.getElementById('cat').src="cat.jpeg";
    document.getElementById('msg').textContent="John the cat is awake!";
}

function sleepcat() {
    document.getElementById('cat').src="catsleep.jpeg";
    document.getElementById('msg').textContent="John the cat is asleep!";
}

function dancecat() {
    document.getElementById('cat').src="catdance.jpeg";
    document.getElementById('msg').textContent="John the cat is dancing with his friends!";
}

function articleprep() {
    location.href = "svpages.html";
}

function totable() {
    location.href = "svgametable.html";
}