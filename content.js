window.onload = checkForCircle();

function checkForCircle() {

    if (!"Notification" in window) {
        alert("unsupported version");
    }

    const circle = $(".sk-fading-circle");

    if (circle[0]) {
        console.log('Waiting to pass splash, refreshing in 5 seconds.');
        setTimeout(checkForCircle, 5000);
    } else {
        console.log("Trying for keyword.");
        findKeyword();

    }
}

function findKeyword() {

    const keyword = $("*:contains('is excluded')");

    if (keyword) {
        let found = new Notification("Ready to cart!");
        found.onclick = function openWindow() {
            window.focus();
            this.cancel();
        };
        found.show();
    }
}

