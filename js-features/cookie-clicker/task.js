let clickerCount = document.getElementById("clicker__counter");
let cookieClick = document.getElementById("cookie");
let speedCounter = document.getElementById("clicker__speed");
let lastClickTime = null;
cookieClick.addEventListener("click", function () {
    let count = parseInt(clickerCount.textContent);
    count++;
    clickerCount.textContent = count;
    if (cookieClick.width === 200) {
        cookieClick.width = 180;
    } else {
        cookieClick.width = 200;
    }
    let currentTime = Date.now();
    if (lastClickTime !== null) {
        let differenseSeconds = (currentTime - lastClickTime) / 1000;
        let speed = (1 / differenseSeconds).toFixed(2);
        speedCounter.textContent = speed;
        }
        lastClickTime = currentTime;

        cookieClick.classList.add("cookie-bounce");
        setTimeout(function () {
            cookieClick.classList.remove("cookie-bounce");
        }, 300);
    });
