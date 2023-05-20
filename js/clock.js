const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(getClock, 1000); getClock라는 펑션을 1초마다 반복한다는 의미. 단 바로 실행되지 않고 5초 후 첫 시작이 되고 5초마다 반복
//setTimeout(getClock, 1000); getClock라는 펑션을 초 기다렸다가 한번만 실행

getClock(); //바로 실행되도록 펑션을 넣어준것
setInterval(getClock, 1000);