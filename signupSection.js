/*Button Sign up*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupSection").addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "signupSection.html";
    });
});