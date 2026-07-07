document.getElementById('timer')
let timerDisplay = document.getElementById('timer');
let totalSeconds = parseInt(timerDisplay.textContent);
function pad(number) {
    return String(number).padStart(2, '0');
}
timerDisplay.textContent = '00:00:' + pad(totalSeconds);
let interval = setInterval(function() {
    totalSeconds--;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    timerDisplay.textContent = formattedTime;
    if (totalSeconds === 0) {
        setTimeout(function() {
        alert('Вы победили в конкурсе!');
        }, 100);
        clearInterval(interval);
    }
}, 1000);