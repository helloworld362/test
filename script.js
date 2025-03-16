let countdownInterval;

function startCountdown() {
    let hours = parseInt(document.getElementById('hours').value) || 0;
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalTime = hours * 3600 + minutes * 60 + seconds;
    document.querySelector('button').disabled = true;
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Time's up!";
            document.querySelector('button').disabled = false;
            return;
        }
        let h = Math.floor(totalTime / 3600);
        let m = Math.floor((totalTime % 3600) / 60);
        let s = totalTime % 60;
        let formattedTime = 
            String(h).padStart(2, '0') + ':' +
            String(m).padStart(2, '0') + ':' +
            String(s).padStart(2, '0');
        document.getElementById('countdown').textContent = formattedTime;
        totalTime--;
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('countdown').textContent = "00:00:00";
    document.querySelector('button').disabled = false;
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 0;
    document.getElementById('seconds').value = 0;
}
