let alarmTimeout;

function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    const alarmDate = new Date();
    const currentTime = new Date();

    alarmDate.setHours(alarmInput.split(':')[0]);
    alarmDate.setMinutes(alarmInput.split(':')[1]);
    alarmDate.setSeconds(0);

    if (alarmDate.getTime() < currentTime.getTime()) {
        alert('Please choose a time in the future!');
        return;
    }

    const timeDifference = alarmDate.getTime() - currentTime.getTime();

    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }

    alarmTimeout = setTimeout(() => {
        playAlarmSound();
    }, timeDifference);

    document.getElementById('status').innerText = `Alarm set for ${alarmInput}`;
}

function playAlarmSound() {
    const sound = document.getElementById('alarmSound');
    sound.play();
    document.getElementById('status').innerText = 'Alarm ringing!';
}
